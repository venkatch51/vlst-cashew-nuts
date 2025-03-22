import React from "react";
import AppRoutes from "./AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import { TradersProvidercontext } from "./context/TradersContext";

const App = () => {
  return (
    <BrowserRouter>
      <TradersProvidercontext>
        <NavbarComp />
        <AppRoutes />
        <Footer />
      </TradersProvidercontext>
    </BrowserRouter>
  );
};

export default App;
