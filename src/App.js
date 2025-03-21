import React from "react";
import AppRoutes from "./AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
