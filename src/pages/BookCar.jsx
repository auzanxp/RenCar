import { useEffect, useState } from "react";
import TableList from "../components/TableList";
import axios from "../api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const toastrOptions = {
  position: "top-center",
  autoClose: 3500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const initState = {
  pickUpLoc: "",
  dropOffLoc: "",
  pickUpDate: "",
  dropOffDate: "",
  pickUpTime: "",
  carId: "",
  userId: 1,
  adminId: 1,
};

export default function BookCar() {
  const [orders, setOrders] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState(initState);
  const navigate = useNavigate();
  const Id = useParams().id;

  useEffect(() => {
    document.title = "Order Car";
    if (Id) {
      const getDataDetail = () => {
        axios
          .get(`/order/${Id}`)
          .then((res) => {
            setInput(res.data);
            setFetchStatus(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getDataDetail();
    } else {
      const getData = () => {
        axios
          .get("/order")
          .then((res) => {
            setOrders(res.data);
            setFetchStatus(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getData();
    }
    setInput(initState);
  }, [Id, fetchStatus]);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    console.log({ input });

    const pickUp = new Date(input.pickUpDate);
    const dropOff = new Date(input.dropOffDate);

    if (pickUp > dropOff) {
      toast.error('tanggal Pick Up harus lebih dar tanggal Drop Off')
    } else {
      try {
          if (Id) {
            const result = await axios.put(`/order/${Id}`, { ...input });
            toast.success("data berhasil diubah.", toastrOptions);
            setFetchStatus(false);
            setInput(initState);
            navigate("/ordercar");
          } else {
            const result = await axios.post("/order", { ...input });
            toast.success("data berhasil ditambahkan.", toastrOptions);
            setFetchStatus(false);
            setInput(initState);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message, toastrOptions);
        }
    }

  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 to-white pt-40">
        <div className="container max-w-screen-xl mx-auto px-10">
          <div className="mx-auto mb-10">
            <div className="bg-white w-full py-12 px-16 shadow-xl relative z-4 text-black rounded-2xl bg-cover bg-center bg-no-repeat">
              <h2 className="text-3xl font-bold mb-10">Book a car</h2>

              <form
                onSubmit={handleSubmitOrder}
                id="form"
                className="grid grid-cols-3 gap-8"
              >
                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Your Car Type <b className="text-red-500">*</b>
                  </label>
                  <input
                    className="text-lg border border-gray-300 rounded-md py-2 px-4 w-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    name="carId"
                    value={input.carId}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Pick-up <b className="text-red-500">*</b>
                  </label>
                  <input
                    className="text-lg border border-gray-300 rounded-md py-2 px-4 w-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    name="pickUpLoc"
                    value={input.pickUpLoc}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Drop-of <b className="text-red-500">*</b>
                  </label>
                  <input
                    className="text-lg border border-gray-300 rounded-md py-2 px-4 w-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    name="dropOffLoc"
                    value={input.dropOffLoc}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col relative">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Pick-up Date<b className="text-red-500">*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="pickUpDate"
                    value={input.pickUpDate}
                    onChange={handleInput}
                    type="date"
                    required
                  />
                </div>

                <div className="flex flex-col relative">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Drop-of Date <b className="text-red-500">*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="dropOffDate"
                    value={input.dropOffDate}
                    onChange={handleInput}
                    type="date"
                    required
                  />
                </div>

                <div className="flex flex-col relative">
                  <label className="text-base font-semibold mb-4">
                    &nbsp; Pick-up Time <b className="text-red-500">*</b>
                  </label>
                  <input
                    className="outline-none text-gray-500 py-3 pr-12 border border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="pickUpTime"
                    value={input.pickUpTime}
                    onChange={handleInput}
                    type="time"
                  />
                </div>

                <button
                  className="py-3 px-3 self-end border-none font-body text-base font-medium text-white bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                  type="submit"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white w-full py-16 px-16 shadow-xl relative z-4 text-black rounded-2xl bg-cover bg-center bg-no-repeat">
            <TableList data={orders} setFetchStatus={setFetchStatus} />
          </div>
        </div>
      </section>
    </>
  );
}
