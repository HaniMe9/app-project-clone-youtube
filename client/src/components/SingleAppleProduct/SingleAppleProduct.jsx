import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
  const [products, setProducts] = useState([]);

  const productID = useParams();
  console.log(productID);
  
    useEffect(() => {    
      async function getAllProducts() {
        try{const res = await fetch('http://127.0.0.1:8000/getAllProducts');
        const data = await res.json();

          
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      getAllProducts();
    }, []);
  
  return (
    <div>SingleAppleProduct</div>
  )
}

export default SingleAppleProduct