import "./App.css";
import Header from "./Header";
import CategoryNavBar from "./CategoryNavBar";
import Product from "./Product/Main";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <CategoryNavBar />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
