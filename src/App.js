import "./App.css";
import Header from "./components/Header";
import CategoryNavBar from "./components/CategoryNavBar";
import Product from "./components/Product/Main";
import Footer from "./components/Footer";

function App() {
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

export default App;
