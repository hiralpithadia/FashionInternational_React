import common from "../common.json";
import logo from "../logo.png";

function Header() {
  return (
    <header className="App-header">
      <div className="raw header-main align-items-center p-0">
        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12 header-logo p-3 text-center">
          <img src={logo} className="logo my-3" alt="logo" />
          <form className="mx-4 my-auto">
            <select name="select" className="text-uppercase border-0 bg-white">
              {common.orderType.map((type, i) => (
                <option key={type} value={type} className="text-uppercase">
                  {type}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 nav-icons p-3 text-center">
          {common.topBarIcons.map((icon, i) => (
            <a href="#" key={icon.type} onClick={(e) => e.preventDefault()}>
              <img src={icon.image} alt={icon.type} />
            </a>
          ))}
          <span> (5 Items, EUR 2.300) </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
