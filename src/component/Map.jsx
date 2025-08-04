import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  function handleShowFoem() {
    navigate("form");
  }
  return (
    <div className="w-1/2" onClick={handleShowFoem}>
      {lat}
      {/* <Outlet /> */}
    </div>
  );
};

export default Map;
