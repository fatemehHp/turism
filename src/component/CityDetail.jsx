import React from "react";
import { useParams } from "react-router-dom";

const CityDetail = () => {
  const { id } = useParams();
  return <div>CityDetail{id}</div>;
};

export default CityDetail;
