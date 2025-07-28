import React from "react";
import Product from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import Cities from "./component/Cities";
import Countries from "./component/Countries";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Cities />} />
          <Route path="cities" element={<Cities />} />
          <Route path="countries" element={<Countries />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
