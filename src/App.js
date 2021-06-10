import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Feature from "./components/feature product";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Latest from "./components/lastest Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Newsletter from "./components/Newsletter";
import ProductDetails from "./components/product details";
import ProductFilter from "./components/product filter";
import Testimonial from "./components/testimonial";

//context api
import { NavContextProvider } from "./Context/NavContext";
import { ProductFilterContextProvider } from "./Context/ProductFilterContext";

function App() {
  return (
    <>
      <Router>
        <NavContextProvider>
          <Navbar />
          <Sidebar />
        </NavContextProvider>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Feature />
            <ProductFilterContextProvider>
              <Latest />
              <ProductFilter />
            </ProductFilterContextProvider>
            <Testimonial />
            <Newsletter />
          </Route>
          <Route exact path="/product">
            <ProductDetails />
            <Newsletter />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
