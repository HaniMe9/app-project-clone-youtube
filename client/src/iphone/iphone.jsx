import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Iphones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/iphones")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => console.log("Error: unable to fetch!"));
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <div className="title-wrapper bold">Iphones</div>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>

          {products?.map((product, index) => {
            let id = product.product_ID;
            let title = product.product_name;
            let img = product.product_image;
            let Brief = product.product_brief_description;
            let Description = product.full_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;

            let productDiv = (
              <div
                key={index}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                {/* Text Content */}
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${index % 2 === 0 ? "1" : "2"}`}
                >
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="product-brief">{Description}</div>
                  <div className="starting-price">
                    {`Starting at $${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="product-image">
                    <img src={img} alt="product image" className="img-fluid" />
                  </div>
                </div>
              </div>
            );

            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphones;
