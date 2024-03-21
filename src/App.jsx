import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./App.css";
import Header from "./componente/Header"
import ProductsList from "./componente/ProductsList";


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect(()=>{  
  // async function getData (endpoint) {
  //  try {
  //    const res = await fetch(endpoint);
  // const data = await res.json();
  // setProducts(data);
  //  } catch (error) {
  //    console.error(error.message);
  //  }
   
  //}
  //getData('https://fakestoreapi.com/products');
  //}, []);

   useEffect(()=>{
    function getData(endpoint){
      setIsLoading(true);
      fetch(endpoint)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => cosole.error (error.message))
        .finally(()=>setIsLoading(false));

  }
  getData('https://fakestoreapi.com/products');
  },[]);
  
  if(isLoading) return  <ClipLoader
  color='tomato'
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>

  
  return (
    <>
     <Header/>
     <ProductsList products={products}/>
    </>
  );
}

export default App;
