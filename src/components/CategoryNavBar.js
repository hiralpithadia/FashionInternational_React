import common from "../common.json";

function CategoryNavBar() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center categoriesNavBar">
      <ul className="navbar-nav categories">
        {common.categories.map((category, i) => (
          <li key={category} className="nav-item" key={category}>
            <a
              className="nav-link text-dark text-uppercase"
              aria-current="page"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNavBar;
