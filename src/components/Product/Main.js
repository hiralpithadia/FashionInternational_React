import React, { useEffect, useState, useRef } from "react";
import product from "../../product.json";
import ModalImage from "./ModalImage";
import ModalMobileCarousel from "./ModalMobileCarousel";
import RelatedProducts from "./RelatedProducts";
import ProductOrder from "./ProductOrder";
import ProductOrderMobile from "./ProductOrderMobile";
import Button from "./Button";

function Main() {
  const [highlight, setHighlight] = useState(0);
  const itemRef = useRef([]);

  useEffect(() => {
    itemRef.current[highlight].classList.add("highlight");
  });

  const handleVariantSelect = (event, index) => {
    event.preventDefault();
    itemRef.current[highlight].classList.remove("highlight");
    setHighlight(index);
    itemRef.current[index].classList.add("highlight");
  };
  return (
    <article>
      <section>
        <div className="container-fluid">
          <div className="row m-0 p-0">
            <p className="productSection text-uppercase fw-bold px-2">
              Back / men 09.2020 / Sweaters / 4020042
            </p>

            {/* Modal Image Section  */}
            <div className="row d-flex-inline justify-content-around my-3 mx-0 px-2">
              {/* Modal image large device view */}
              <ModalImage />

              {/* Product Carousel View for Mobile  */}
              <ModalMobileCarousel />

              {/* Product detail section  */}
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12"></div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-12 p-0">
                <p className="fw-bold fs-4">
                  {product.name}
                  <a
                    href="#"
                    className="float-end"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img src="./assets/vector.png" width="20" alt="user" />
                  </a>
                </p>
                <p>4020042</p>
                <p>
                  WHP EUR 43.00 - RRP EUR 76.00
                  <span className="float-end text-danger fw-bold">
                    SALE 30%
                  </span>
                </p>
                <hr />
                <p>{product.description}</p>

                {/* Product deatils list */}
                <div className="details row text-uppercase mx-0 my-3 my-5 p-0">
                  {product.productDetails.map((data) => (
                    <div
                      key={data.type}
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-md-flex text-uppercase px-0 py-1"
                    >
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 fw-bold px-0">
                        {data.type}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 px-0">
                        {data.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Product color variants and laundary instruction section */}
                <div className="colorsCategories row mx-0 p-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3 px-0">
                    {product.productVariants.map((variant, i) => (
                      <a
                        key={variant.color}
                        href="#"
                        onClick={(event) => handleVariantSelect(event, i)}
                      >
                        <img
                          ref={(el) => (itemRef.current[i] = el)}
                          src={variant.image}
                          alt={variant.color}
                          className="productColors"
                        />
                      </a>
                    ))}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 laundaryInstructions px-0">
                    {product.laundaryInstructions.map((laundaryIcons, i) => (
                      <img
                        key={`laundary_${i}`}
                        src={laundaryIcons.image}
                        alt={laundaryIcons.title}
                      />
                    ))}
                  </div>
                </div>
                <hr />
                <p>
                  <a
                    href="#"
                    className="text-uppercase text-decoration-underline text-dark"
                    onClick={(e) => e.preventDefault()}
                  >
                    size guide
                  </a>
                </p>
                <hr />
                <Button title="Go to order grid" />
              </div>
            </div>

            {/* Order Section  */}
            <div className="row justify-content-around m-0 mt-5 p-0">
              <p className="text-uppercase fs-5 fw-bold titleText m-0 p-4 text-center">
                Order
              </p>

              {/* Order Product Details Large device view  */}
              {product.productVariants.map((variant) => (
                <ProductOrder key={variant.color} variant={variant} />
              ))}

              {/* Order Product Details Mobile view */}
              {product.productVariants.map((variant) => (
                <ProductOrderMobile key={variant.color} variant={variant} />
              ))}
            </div>

            {/* Stock Availablity icons & Add to Cart  */}
            <div className="row align-items-center m-0 mt-3 p-2">
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-12 d-flex text-uppercase stocksIndicationSection mb-3 px-0 text-left">
                {product.stockIndicators.map((indicator, i) => (
                  <div
                    key={indicator.name}
                    className="col-xl-2 col-lg-2 col-6 py-1"
                  >
                    <img
                      src={indicator.image}
                      alt="noStockAvailable"
                      className="me-1 align-text-bottom"
                    />
                    {indicator.name}
                  </div>
                ))}
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-uppercase p-0">
                <Button title="Add to cart" />
              </div>
            </div>

            {/* Related products Section */}
            <RelatedProducts />
          </div>
        </div>
      </section>
    </article>
  );
}

export default Main;
