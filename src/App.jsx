import { useEffect, useState } from "react";
import "./App.css";
import Header from "./componente/Header"
import ProductsList from "./componente/ProductsList";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{  
   async function getData (endpoint) {
    try {
      const res = await fetch(endpoint);
   const data = await res.json();
   setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
   
  }
  getData('https://fakestoreapi.com/products');
  }, []);

  return (
    <>
     <Header/>
     <ProductsList products={products}/>
    </>
  );
}

export default App;
