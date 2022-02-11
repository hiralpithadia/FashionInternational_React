import product from "../../product.json";

function ProductImage() {
  return (
    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-5 col-xs-12 d-none d-sm-block p-0">
      <div className="row">
        {product.modalImages.map((image, i) => (
          <div
            key={`modalImage_${i + 1}`}
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 p-2"
          >
            <img src={image} alt={`modalImage_${i + 1}`} width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
