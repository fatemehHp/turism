import React, { useEffect, useState } from "react";
import Product from "./pages/ProductPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import Cities from "./component/Cities";
import CountriesList from "./component/CountriesList";
import CityDetail from "./component/CityDetail";
import Form from "./component/Form";
// Base url

const App = () => {
  // states

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          <Route path="cities" element={<Cities />} />
          <Route path="cities/:id" element={<CityDetail />} />
          <Route path="cities/:cityID" element={<CityDetail />} />
          <Route path="countries" element={<CountriesList />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
