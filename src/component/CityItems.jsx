import React from "react";

const CityItems = ({ item }) => {
  return (
    <li className="flex cursor-pointer items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 p-4 rounded-lg shadow-md hover:scale-[1.03] hover:shadow-lg transition-all">
      <span className="text-lg font-medium">{item.cityName}</span>
    </li>
  );
};

export default CityItems;
