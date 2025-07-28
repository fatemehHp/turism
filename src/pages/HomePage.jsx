import { Link } from "react-router-dom";
import PageNav from "../component/PageNav";
const HomePage = () => {
  return (
    <>
      <PageNav />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 text-center leading-tight">
          Welcome to the World of Travel
        </h1>
        <p className="text-lg text-blue-700 mb-8 max-w-xl text-center">
          Discover your dream destination, plan your journey, and travel with
          confidence. Your next adventure starts here!
        </p>
        <div className="flex gap-6"></div>
      </div>
    </>
  );
};

export default HomePage;
