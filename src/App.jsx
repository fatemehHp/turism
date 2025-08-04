import React, { useEffect, useState } from "react";
import Product from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
const BASE_URL = "http://localhost:3000";

const App = () => {
  // states
  const [isloading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  // useState
  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);

        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات از سرور");
        }
        const data = await response.json();
        setCities(data);
        setIsLoading(false);
      } catch (error) {
        console.error("خطایی رخ داد:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route
            index
            element={<Cities isloading={isloading} cities={cities} />}
          />
          <Route
            path="cities"
            element={<Cities isloading={isloading} cities={cities} />}
          />
          <Route path="cities/:id" element={<CityDetail />} />
          <Route path="cities/:cityID" element={<CityDetail />} />
          <Route path="countries" element={<CountriesList cities={cities} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
