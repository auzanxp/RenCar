import { Link } from "react-router-dom";
import HeroCar from "../assets/hero/hero-car.png";
import HeroCarr from "../assets/hero/main-car.png";
import { Car } from "lucide-react";

export default function ListCars() {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto px-10">
        <div className="grid grid-cols-3 gap-12 items-center text-center py-40 max-w-screen-2xl mx-auto">
          <div className="border border-gray-300 rounded-md flex flex-col w-96">
            <div className="w-full">
              <img
                className="w-full h-auto rounded-md"
                src={HeroCar}
                alt="car_img"
              />
              <div className="p-8 flex flex-col text-black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-left space-y-2">
                    <p className="text-2xl font-bold">Audi A1</p>
                    <span className="flex space-x-2">
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h4 className="text-2xl">Rp. 350.000</h4>
                    <p className="text-base">per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-6 pb-4 border-b border-gray-300">
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Audi
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; 4/5
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Manual
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; Diesel
                  </span>
                </div>

                <div className="bg-blue-500 hover:bg-blue-600 mt-4 py-4 px-8 rounded-md shadow-md transition-all duration-300 border-2 border-blue-500 text-lg font-bold cursor-pointer">
                  <Link
                    className="text-white font-bold"
                    onClick={() => window.scrollTo(0, 0)}
                    to="/"
                  >
                    Book Ride
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md flex flex-col w-96">
            <div className="w-full">
              <img
                className="w-full h-auto rounded-md"
                src={HeroCar}
                alt="car_img"
              />
              <div className="p-8 flex flex-col text-black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-left space-y-2">
                    <p className="text-2xl font-bold">Audi A1</p>
                    <span className="flex space-x-2">
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h4 className="text-2xl">Rp. 350.000</h4>
                    <p className="text-base">per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-6 pb-4 border-b border-gray-300">
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Audi
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; 4/5
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Manual
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; Diesel
                  </span>
                </div>

                <div className="bg-blue-500 hover:bg-blue-600 mt-4 py-4 px-8 rounded-md shadow-md transition-all duration-300 border-2 border-blue-500 text-lg font-bold cursor-pointer">
                  <Link
                    className="text-white font-bold"
                    onClick={() => window.scrollTo(0, 0)}
                    to="/"
                  >
                    Book Ride
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md flex flex-col w-96">
            <div className="w-full">
              <img
                className="w-full h-auto rounded-md"
                src={HeroCarr}
                alt="car_img"
              />
              <div className="p-8 flex flex-col text-black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-left space-y-2">
                    <p className="text-2xl font-bold">Audi A1</p>
                    <span className="flex space-x-2">
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                      <i className="text-yellow-500 text-lg">⭐</i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h4 className="text-2xl">Rp. 350.000</h4>
                    <p className="text-base">per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-6 pb-4 border-b border-gray-300">
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Audi
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; 4/5
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-center">
                    <Car size={30} /> &nbsp; Manual
                  </span>
                  <span className="text-xl font-medium text-gray-700 text-left inline-flex justify-between items-centert">
                    <Car size={30} /> &nbsp; Diesel
                  </span>
                </div>

                <div className="bg-blue-500 hover:bg-blue-600 mt-4 py-4 px-8 rounded-md shadow-md transition-all duration-300 border-2 border-blue-500 text-lg font-bold cursor-pointer">
                  <Link
                    className="text-white font-bold"
                    onClick={() => window.scrollTo(0, 0)}
                    to="/"
                  >
                    Book Ride
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
