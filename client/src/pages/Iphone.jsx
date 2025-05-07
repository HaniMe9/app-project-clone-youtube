import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {    
    async function getAllProducts() {
      try {
        const res = await fetch('http://127.0.0.1:8000/getAllProducts');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <div>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold">Iphones</h1>
            <p className="text-2xl text-gray-600 mt-2">
              The best for the brightest.
            </p>
          </div>

          {products?.map((product, index) => {
            const {
              product_url: id,
              product_name: title,
              product_img: img,
              product_brief_description: Brief,
              starting_price: StartPrice,
              price_range: PriceRange,
            } = product;

            const productPage = '/iphone/' + id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center justify-center mb-24 gap-8"
              >
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? 'order-1' : 'order-2'
                  } text-center md:text-left`}
                >
                  <div className="w-[70%] m-auto">
                    <h3 className="text-5xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4 text-2xl">{Brief}</p>
                    <p className="text-gray-800 font-medium text-xl">
                      Starting at {StartPrice}
                    </p>
                    <p className="text-gray-500 mb-4 text-lg">{PriceRange}</p>
                    <div>
                      <Link
                        to={id}
                        className="text-blue-600 hover:underline"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full sm:w-1/2 ${
                    isEven ? 'order-2' : 'order-1'
                  }`}
                >
                  <img src={img} alt={title} className="w-full h-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
