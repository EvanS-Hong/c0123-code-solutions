import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import  Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails.js"
import NotFound from "./pages/NotFound.js";
import Catalog from "./pages/Catalog.js";


function App() {
  return (
        <div>
          <Routes>
            <Route path='/' element={<Header />} >
              <Route index element={<Catalog />} />
              <Route path='details/:productId' element={<ProductDetails />} />
              <Route path="about" element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </div>


  );
}

export default App;
