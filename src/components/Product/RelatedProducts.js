import common from "../../common.json";

function RelatedProducts() {
  return (
    <div className="row justify-content-center m-0 mt-5 p-0">
      <p className="text-uppercase fs-5 fw-bold titleText p-4 text-center">
        related items
      </p>
      {common.relatedProducts.map((prd, i) => (
        <div
          key={`${prd.title}_${i}`}
          className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-6"
        >
          <div className="position-relative">
            <a href="#" onClick={(event) => event.preventDefault()}>
              <img src={prd.image} width="100%" alt="relatedItems" />
              <div className="position-absolute fw-bold text-uppercase saleBox bg-white p-1">
                sale 30%
              </div>
              <p className="text-dark fw-500 text-uppercase">{prd.title}</p>
              <p className="text-muted">
                WSP: EUR 90.00 <br />
                RSP: EUR 188.00
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedProducts;
