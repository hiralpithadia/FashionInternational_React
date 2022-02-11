import logo from "../logo.png";
import common from "../common.json";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="text-center">
        <img src={logo} className="logo my-5" alt="logo" />
      </div>
      <hr />
      <div className="row text-uppercase m-0">
        {Object.values(common.footerLists).map((list, i) => (
          <div
            key={`list_${i + 1}`}
            className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 mb-3"
          >
            <ul className="list-group">
              {list.map((item, i) => (
                <li key={item} className="list-group-item border-0 py-1">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 text-end languageSelect">
          <form className="px-3">
            <select
              name="language"
              id="lng"
              className="text-uppercase border-0 bg-white"
            >
              {common.languages.map((lng, i) => (
                <option key={lng} value={lng}>
                  {lng}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
