import product from "../../product.json";

function ProductOrder(props) {
  return (
    <div className="row d-none d-sm-flex mx-0 my-4 p-0">
      <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-xs-12 p-0">
        Product
        <hr />
        <div className="d-flex align-items-center">
          <div className="productImage">
            <img
              src="./assets/productsImages/mainProduct.png"
              width="30"
              alt="blackPullover"
            />
          </div>
          <span className="text-uppercase px-2">
            Pullover of organic cotton - Black
          </span>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-12 d-flex justify-content-around d-none d-sm-flex p-0 text-center">
        {props.variant.stockavailability.map((stock, i) => (
          <div
            key={stock.type}
            className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 p-0"
          >
            {stock.type}
            <hr />
            <div
              className={`sizeQualityBox ${stock.border} m-auto p-2 text-center`}
            >
              {stock.availability}
            </div>
          </div>
        ))}
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 d-flex justify-content-around d-none d-sm-flex p-0 text-center">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 p-0">
          Total
          <hr />
          <div className="d-flex align-items-center justify-content-center h-50">
            4
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 p-0">
          Amount
          <hr />
          <div className="d-flex align-items-center justify-content-center h-50">
            EUR 76.00
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 p-0">
          Discount
          <hr />
          <div className="d-flex align-items-center justify-content-center h-50">
            <input type="text" id="discount" name="discount" className="w-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;
