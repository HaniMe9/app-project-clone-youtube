import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const [product, setProduct] = useState([]);

  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch('http://127.0.0.1:8000/getAllProducts');
      const data = await res.json();
      console.log(data);

      const product = data.filter((pro) => pro.product_url === productID);

      console.log(product);
      setProduct(product);
    }
    fetchProduct();
  }, [productID]);

  
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {product?.map((product) => {
            const adjustedImg = product.product_img.replace('./', '/');
            return (
              <div key={product.product_id}>
                <div className="flex flex-col items-center text-center mt-10">
                  <div className="text-5xl font-bold mb-2">
                    {product.product_name}
                  </div>
                  <div className="text-gray-600 mb-6 text-xl">
                    {product.product_brief_description}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center text-center mb-10 space-y-10 md:space-y-0 md:space-x-10">
                  <div className="md:w-1/2">
                    <div className="text-3xl font-semibold text-green-600 mb-2">
                      {`Starting at ${product.starting_price}`}
                    </div>
                    <div className="text-lg text-gray-700 mb-4">
                      {product.price_range}
                    </div>
                    <div className="text-lg text-gray-600 w-[70%] m-auto">
                      {product.product_description}
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <div className="w-full max-w-md mx-auto">
                      <img
                        src={adjustedImg}
                        alt="product"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
