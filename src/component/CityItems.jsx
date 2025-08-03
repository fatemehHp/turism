import React from "react";
import { Link, useParams } from "react-router-dom";

const CityItems = ({ item }) => {
  return (
    <Link to={item.id}>
      <li className="flex  justify-between cursor-pointer bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 p-4 rounded-lg shadow-md hover:scale-[1.03] hover:shadow-lg transition-all">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">
            {item.cityName}, {item.country}
          </span>
        </div>

        <p className="text-sm text-blue-800">📝 {item.notes}</p>
        <p className="text-sm text-blue-800 italic">
          🗓️ {new Date(item.date).toLocaleDateString()}
        </p>
        <button className="mt-2 self-start cursor-pointer  px-4 py-1 text-sm bg-red-100 text-red-700 rounded-md shadow-sm hover:bg-red-200 transition-colors">
          Remove
        </button>
      </li>
    </Link>
  );
};

export default CityItems;
