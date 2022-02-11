function Button(props) {
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-dark text-uppercase rounded-0 p-3"
        type="button"
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
