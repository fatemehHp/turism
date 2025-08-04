import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const backHandel = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className=" mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
        Travel Form
      </h2>

      <form className="space-y-5">
        {/* City Name */}
        <div>
          <label
            htmlFor="cityName"
            className="block mb-2 font-semibold text-gray-700"
          >
            City Name
          </label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            placeholder="Enter city name"
            className="    w-full
    px-4 py-3
    border-2 border-gray-300
    rounded-xl
    shadow-sm
    placeholder-gray-400
    text-gray-800
    font-medium
    transition
    duration-300
    focus:outline-none
    focus:border-pink-500
    focus:ring-4
    focus:ring-pink-200"
            required
          />
        </div>

        {/* When did you go? */}
        <div>
          <label
            htmlFor="visitDate"
            className="block mb-2 font-semibold text-gray-700"
          >
            When did you go to?
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            className="    w-full
    px-4 py-3
    border-2 border-gray-300
    rounded-xl
    shadow-sm
    placeholder-gray-400
    text-gray-800
    font-medium
    transition
    duration-300
    focus:outline-none
    focus:border-pink-500
    focus:ring-4
    focus:ring-pink-200"
            required
          />
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block mb-2 font-semibold text-gray-700"
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Write any notes here..."
            className="    w-full
    px-4 py-3
    border-2 border-gray-300
    rounded-xl
    shadow-sm
    placeholder-gray-400
    text-gray-800
    font-medium
    transition
    duration-300
    focus:outline-none
    focus:border-pink-500
    focus:ring-4
    focus:ring-pink-200"
            rows={4}
          />
        </div>

        <div className="flex justify-between">
          <Button
            onClick={(e) => backHandel(e)}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
