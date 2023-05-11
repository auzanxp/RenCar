import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/Api";
import TableLoading from "./TableLoading";
import Modal from "./Modal";

const toastrOptions = {
  position: "top-center",
  autoClose: 3500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export default function TableList({ data, ...props }) {
  const [showModal, setShowModal] = useState({
    isOpen: false,
    id: "",
  });
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    try {
      await axios.delete(`/order/${showModal.id}`);
      toast.success("Data Berhasil Dihapus!", toastrOptions);
      props.setFetchStatus(false);
      setShowModal({
        isOpen: false,
        id: "",
      });
    } catch (error) {
      toast.error(error.response.data.message, toastrOptions);
      setShowModal({
        isOpen: false,
        id: "",
      });
    }
  };

  return (
    <div className="flex lg:items-center">
      {showModal.isOpen && (
        <Modal isOpen={setShowModal} deleteHandler={handleDeleteData} />
      )}
      <table className="table rounded-lg shadow bg-slate-100 ">
        <thead>
          <tr className="text-xs">
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              No.
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Action
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Pick Up Loc
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Drop Off Loc
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Pick Up Date
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Drop Off Date
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Pick Up time
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Car Id
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              User Id
            </th>
            <th className="p-4 font-medium uppercase border-b-2 dark:border-dark-5 whitespace-nowrap text-black">
              Admin Id
            </th>
          </tr>
        </thead>
        <tbody>
          {data == null ? (
            <TableLoading />
          ) : (
            data.map((item, i) => (
              <tr className="text-xs text-black" key={item.id}>
                <td className="p-4 border-b-2 dark:border-dark-5">{i + 1}</td>
                <td className="w-40 p-4 border-b-2 dark:border-dark-5 min-w-min">
                  <div className="flex flex-row space-x-1">
                    <div>
                      <button
                        className="flex items-center border-black border tracking-wider justify-center text-sm sm:text-md text-black rounded-md transition duration-200 px-3 py-1 hover:bg-slate-300"
                        value={item.id}
                        onClick={() => {
                          navigate(`/ordercar/${item.id}`);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button
                        className="p-1 flex items-center tracking-wider justify-center border text-sm sm:text-md text-white rounded-md transition duration-200 bg-red-500 hover:bg-red-700"
                        onClick={() => {
                          setShowModal({ isOpen: true, id: item.id });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
                <td className="w-40 p-4 border-b-2 dark:border-dark-5 min-w-min">
                  {item.pickUpLoc}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.dropOffLoc}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.pickUpDate}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.dropOffDate}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5 ">
                  {item.pickUpTime}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.carId}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.userId}
                </td>
                <td className="p-4 border-b-2 dark:border-dark-5">
                  {item.adminId}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
