import "./App.css";
import Header from "./Header";
import CategoryNavBar from "./CategoryNavBar";
import Product from "./Product/Main";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <div className="topNews text-uppercase p-3">
        Europe: delivery within 2-3 working days
      </div>
      <Header />
      <CategoryNavBar />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
