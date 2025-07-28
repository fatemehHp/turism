import React from "react";
import CityItems from "./CityItems";

const CityList = ({ cities }) => {
  return (
    <ul className=" grid gap-2">
      {cities.map((item) => {
        return <CityItems item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default CityList;
