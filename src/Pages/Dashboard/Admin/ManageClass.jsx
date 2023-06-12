import { Helmet } from "react-helmet";
import useCreateClass from "../../../Hooks/useCreateClass";
import { FaBan, FaCheckSquare, FaComment } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClass = () => {
  const [disabledApproveButtonId, setDisabledApproveButtonId] = useState(null);
  const [disabledDenyButtonId, setDisabledDenyButtonId] = useState(null);
  const [createClass, refetch] = useCreateClass();
  console.log(createClass);

  const handleApprove = (cls) => {
    fetch(`https://summer-symphony-server.vercel.app/classes/${cls._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${cls.name} is approved`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setDisabledApproveButtonId(cls._id);
        }
        setDisabledDenyButtonId(null);
      });
  };

  const handleDeny = (cls) => {
    fetch(`https://summer-symphony-server.vercel.app/classes/${cls._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Denied" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${cls.name} is Denied`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setDisabledDenyButtonId(cls._id);
        }
        setDisabledApproveButtonId(null);
      });
  };

  return (
    <div className="w-[75%] mx-auto">
      <Helmet>
        <title>Manage Classes | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          Manage Classes
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#c25934] text-white">
            <tr className="font-OpenSans">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Approve / Deny / Send Feedback</th>
            </tr>
          </thead>
          <tbody>
            {createClass.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cls.image} alt="User Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-semibold">{cls.name}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{cls.instructorName}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{cls.instructorEmail}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{cls.availableSeats}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">${cls.price}</h1>
                </td>
                <td>
                  <h1 className="font-semibold text-center">{cls.status}</h1>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-5">
                    <button
                      onClick={() => handleApprove(cls)}
                      title="Approve"
                      disabled={disabledApproveButtonId === cls._id}
                      className="p-3 bg-red-400 hover:bg-red-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaCheckSquare></FaCheckSquare>
                    </button>
                    <button
                      onClick={() => handleDeny(cls)}
                      title="Deny"
                      disabled={disabledDenyButtonId === cls._id}
                      className="p-3 bg-yellow-400 hover:bg-yellow-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaBan></FaBan>
                    </button>
                    <button
                      //   onClick={() => handleMakeInstructor(user)}
                      title="Send Feedback"
                      //   disabled={disabledInstructorButtonId === user._id}
                      className="p-3 bg-green-500 hover:bg-green-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaComment></FaComment>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
