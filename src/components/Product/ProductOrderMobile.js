import product from "../../product.json";

function ProductOrderMobile(props) {
  return (
    <div className="col-12 d-sm-block d-md-none border-top mx-0 mt-3 p-0">
      <div className="d-flex align-items-center bg-light mb-3 p-2">
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

      {props.variant.stockavailability.map((stock, i) => (
        <div key={stock.type} className="d-flex align-items-center mb-3">
          <div className="col-5 text-start px-3">{stock.type}</div>
          <div
            className={`col-1 sizeQualityBox ${stock.border} d-flex px-3 text-center`}
          >
            {stock.availability}
          </div>
          <div className="col-5 text-start px-3">EUR 111176.00</div>
        </div>
      ))}
      <div className="d-flex align-items-center mb-3">
        <div className="col-5 text-start px-3">Total</div>
        <div className="col-7 text-start">4</div>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="col-5 text-start px-3">Amount</div>
        <div className="col-7 text-start">EUR 304.00</div>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="col-5 text-start px-3">Discount</div>
        <div className="col-7 text-start">
          <input type="text" id="discount" name="discount" className="w-50" />
        </div>
      </div>
    </div>
  );
}

export default ProductOrderMobile;
