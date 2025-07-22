import car from "../../../public/car.png";
import React from "react" ;
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 bg-white dark:bg-gray-900">
      <div className="text-[40px] md:text-[60px] font-bold text-gray-900 dark:text-white">
        <h2>Premium Car Rental in your area</h2>
        <h2 className="text-[20px] md:text-[30px] text-gray-600 dark:text-gray-300 mt-4 font-normal">
          Rent the best cars at affordable prices.
        </h2>
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded-xl mt-4 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit text-[20px] md:text-[30px] font-semibold">
          Explore Now
        </button>
      </div>
      <div className="flex items-center justify-center mt-6 md:mt-0">
        {/* Replace this with an actual image component */}
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300">
          <Image
          src={car}
          alt="Car Image"
            className="w-full h-full object-cover rounded-xl"          
          />
        </div>
      </div>
    </div>
  );
}
