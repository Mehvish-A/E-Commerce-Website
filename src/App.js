// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Home from "./components/Home";
// import ProductDetail from "./components/ProductDetail";
// import Login from "./components/Login";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // Import your global styles
// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </Provider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetails";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import CartOffcanvas from "./components/CartOffCanvas";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout" element={<CartOffcanvas />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;