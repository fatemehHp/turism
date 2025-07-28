import Loading from "./Loading";
import CityList from "./CityList";
const Cities = ({ cities, isloading }) => {
  return (
    <div className="p-6 md:p-10 bg-white/80 backdrop-blur-md rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        🌍 Explore Cities
      </h2>
      {isloading ? <Loading /> : <CityList cities={cities} />}
    </div>
  );
};

export default Cities;
