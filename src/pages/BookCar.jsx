export default function BookCar() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 to-white pt-40">
        {/* overlay */}
        {/* <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div> */}

        <div className="container max-w-screen-xl mx-auto px-10">
          <div className="mx-auto mb-40">
            <div className="bg-white w-full py-16 px-16 shadow-xl relative z-4 text-black rounded-2xl bg-cover bg-center bg-no-repeat">
              <h2 className="text-3xl font-bold mb-10">Book a car</h2>

              <form className="grid grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select
                    className="text-lg text-gray-500 font-medium border border-gray-300 rounded-md py-3 px-4 w-full"
                    // value={carType}
                    // onChange={handleCar}
                  >
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select
                    className="text-lg text-gray-500 font-medium border border-gray-300 rounded-md py-3 px-4 w-full"
                    // value={pickUp}
                    // onChange={handlePick}
                  >
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select
                    className="text-lg text-gray-500 font-medium border border-gray-300 rounded-md py-3 px-4 w-full"
                    // value={dropOff}
                    // onChange={handleDrop}
                  >
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="flex flex-col relative">
                  <label
                    className="text-base font-semibold mb-4"
                    htmlFor="picktime"
                  >
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up Date<b>*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300"
                    id="picktime"
                    // value={pickTime}
                    // onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="flex flex-col relative">
                  <label
                    className="text-base font-semibold mb-4"
                    htmlFor="droptime"
                  >
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of Date <b>*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300"
                    id="droptime"
                    // value={dropTime}
                    // onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <div className="flex flex-col relative">
                  <label
                    className="text-base font-semibold mb-4"
                    htmlFor="droptime"
                  >
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up Time <b>*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300"
                    id="droptime"
                    // value={dropTime}
                    // onChange={handleDropTime}
                    type="time"
                  ></input>
                </div>

                <button
                  className="py-3 px-3 self-end border-none font-body text-base font-medium text-white bg-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
                  //   onClick={openModal}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
