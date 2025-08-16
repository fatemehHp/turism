import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCityContext } from "../context/CitiesContext";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CityDetail = () => {
  const { id } = useParams();
  const { getCurrentCities, currentCity, isloading } = useCityContext();
  const navigate = useNavigate();

  useEffect(function () {
    getCurrentCities(id);
  }, []);

  const backHandel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (isloading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 p-4 rounded-lg shadow-md hover:scale-[1.03] hover:shadow-lg transition-all gap-2">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">
              {currentCity.cityName}
            </span>
          </div>

          <p className="text-sm text-blue-800 italic">
            🗓️ {new Date(currentCity.date).toLocaleDateString()}
          </p>

          {currentCity.notes && (
            <p className="text-sm text-gray-700 italic mt-2 md:mt-0">
              📝 {currentCity.notes}
            </p>
          )}
        </div>
        <Button
          onClick={(e) => backHandel(e)}
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800"
        >
          Back
        </Button>
      </>
    );
  }
};

export default CityDetail;
