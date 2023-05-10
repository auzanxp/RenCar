import BgShape from "../assets/hero/hero-bg.png";
import HeroCar from "../assets/hero/hero-car.png";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[97vh] bg-slate-100">
        <div className="max-w-[133rem] mx-auto px-10 pt-40">
          <img
            className="absolute top-0 right-0 z-10"
            src={BgShape}
            alt="bg-shape"
          />
          <div className="relative w-full h-full flex items-center">
            <div className="flex flex-col z-30 max-w-lg mt-20">
              <h4 className="font-bold text-4xl">Plan your trip now</h4>
              <h1 className="font-bold text-6xl mt-4 mb-9">
                Save <span className="text-blue-600">Big</span> with our car rental
              </h1>
              <p className="text-base font-normal leading-6 text-gray-600 mb-16">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
            </div>
            <img
              className="z-20 absolute right-0 w-[65%] mt-20"
              src={HeroCar}
              alt="car-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
