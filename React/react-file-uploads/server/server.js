import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import cors from 'cors';
import ClientError from './lib/client-error.js';
import errorMiddleware from './lib/error-middleware.js';
import uploadsMiddleware from './lib/uploads-middleware.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.static('public'));
app.use(express.json());

app.post('/api/uploads', uploadsMiddleware.single('image'), async (req, res, next) => {
  try {
    const { caption } = req.body;
    if (!caption) {
      throw new ClientError(400, 'caption is a required field');
    }
    /* TODO:
    * - create a url for the image by combining '/images' with req.file.filename
    * - insert the "caption" and "url" into the "images" table
    * - respond with the inserted row data and the proper status code for inserting data
    */
    const url = (`/images/${req.file.filename}`);
    const sql = `
    insert into "images" ("url", "caption")
    values ($1, $2)
    returning *;
    `;
    const params = [url, caption];
    const jsonData = await db.query(sql, params);
    const results = jsonData.rows[0];
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

app.get('/api/images', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "images"
      `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
