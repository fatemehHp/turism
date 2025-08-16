import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const BASE_URL = "http://localhost:3000";

const CityContext = createContext();
const CitiesContext = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

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
  // Get Current  City
  async function getCurrentCities(id) {
    console.log(id);
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات از سرور");
      }
      const data = await response.json();
      console.log(data);
      setCurrentCity(data);
      setIsLoading(false);
    } catch (error) {
      console.error("خطایی رخ داد:", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        setCities,
        isloading,
        getCurrentCities,
        setCurrentCity,
        currentCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

function useCityContext() {
  const citiyContext = useContext(CityContext);
  return citiyContext;
}
export default CitiesContext;
export { CityContext, useCityContext };
