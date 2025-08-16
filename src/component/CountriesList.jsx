import React from "react";
import CountriesItems from "./CountriesItems";
import { useCityContext } from "../context/CitiesContext";

const CountriesList = () => {
  const { cities } = useCityContext();

  const countries = cities.reduce((newArray, current) => {
    if (!newArray.includes(current.country)) {
      // اگر کشور توی لیست نبود، اضافه کن
      return [...newArray, current.country];
    } else {
      // اگر بود، همون لیست رو بدون تغییر برگردون
      return newArray;
    }
  }, []); // مقدار اولیه آرایه خالیه
  return (
    <ul className=" grid gap-2">
      {countries.map((countries) => (
        <CountriesItems countries={countries} />
      ))}
    </ul>
  );
};

export default CountriesList;
