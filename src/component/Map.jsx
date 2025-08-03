import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className="w-1/2">
      {lat}
      {/* <Outlet /> */}
    </div>
  );
};

export default Map;
