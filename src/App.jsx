import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import heroImage from "./assets/heroImage.png";
import Products from "./components/Products";

export default function App(){
  return(
   <>
    <BrowserRouter>
    <div style={{backgroundImage: `url(${heroImage})`}} className="bg-cover bg-center bg-no-repeat min-h-screen">
   <Header/>
   <Routes>
    <Route path = "/" element ={<Hero/>}/>
    <Route path = "products" element = {<Products/>}/>
   </Routes>
    </div>
    </BrowserRouter>
   </>
  );
}