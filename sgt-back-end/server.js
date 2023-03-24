import express from './node_modules/express/index.js';

import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
    from "grades";`
    const result = await db.query(sql)
    const grades = result.rows;
      res.status(200).json(grades);
    } catch (err) {
    console.error('/api/notes error', err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }});

app.post('/api/grades', async (req, res) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = +req.body.score;
    const params = [name, course, score];
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
      `
    if (score === undefined ) {
      res.status(400).json({ error: `missing value in score`});
    } else if ( course === undefined ) {
      res.status(400).json({ error: `missing value in grade` });
    } else if ( name === undefined ) {
      res.status(400).json({ error: `missing value in name` });
    } else if ( score < 0 || score > 100 ) {
      res.status(400).json({ error: `score=${score} is not a valid inter between 0-100` });
    } else {
      const results = await db.query(sql, params);
      const grade = results.rows;
      res.status(201).json(grade);
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/grades/:gradeid', async (req, res) => {
  try {
    const id = +req.params.gradeid;
    const name = req.body.name;
    const course = req.body.course;
    const score = +req.body.score;
    const params = [`${name}`, `${course}`, score, id];
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
      where "gradeId" = $4
      returning *;
      `
    if (score === undefined) {
      res.status(400).json({ error: `missing value in score` });
    } else if (course === undefined) {
      res.status(400).json({ error: `missing value in grade` });
    } else if (name === undefined) {
      res.status(400).json({ error: `missing value in name` });
    } else if (score < 0 || score > 100) {
      res.status(400).json({ error: `score is not a valid inter between 0-100` });
    } else {
      const results = await db.query(sql, params);
      const index = results.rows.length-1
      const grade = results.rows[index];
      if(grade) {
        res.status(200).json(grade);
      } else {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${id}`});
      }
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/grades/:gradeid', async (req, res) => {
  try {
    const id = +req.params.gradeid;
    const params = [id];
    const sqlDelete = `
          delete
            from "grades"
          where "gradeId" = $1
          returning *
          `
    if ( id < 0 ) {
      res.status(400).json({ error: `${id} is an invalid integer`})
    } else {
      const results = await db.query(sqlDelete, params)
      const grade = results.rows;
        if (grade !== []) {
       res.status(204);
        } else {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${id}` });
        }
      }
  } catch (err) {
  console.log(err)
  res.status(500).json({ error: 'an unexpected error occurred' });
}
});



app.listen((8080), () => {
  console.log('The server is listening to port 8080');
});
