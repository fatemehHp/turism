import React, { useState } from "react";

const CountriesItems = ({ countries }) => {
  return (
    <li className="flex  justify-between cursor-pointer bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 p-4 rounded-lg shadow-md hover:scale-[1.03] hover:shadow-lg transition-all">
      {countries}
      <button className="mt-2 self-start cursor-pointer  px-4 py-1 text-sm bg-red-100 text-red-700 rounded-md shadow-sm hover:bg-red-200 transition-colors">
        Remove
      </button>
    </li>
  );
};

export default CountriesItems;
