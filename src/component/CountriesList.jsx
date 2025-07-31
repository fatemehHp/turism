import React from "react";
import CountriesItems from "./CountriesItems";

const CountriesList = ({ cities }) => {
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
