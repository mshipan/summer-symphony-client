import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [disabledAdminButtonId, setDisabledAdminButtonId] = useState(null);
  const [disabledInstructorButtonId, setDisabledInstructorButtonId] =
    useState(null);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setDisabledAdminButtonId(user._id);
        }
        setDisabledInstructorButtonId(null);
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "Instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setDisabledInstructorButtonId(user._id);
        }
        setDisabledAdminButtonId(null);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Manage Users | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          Manage All Users
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#c25934] text-white">
            <tr className="font-OpenSans">
              <th>#</th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th className="text-center">Make Admin / Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="User Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-semibold">{user.name}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{user.email}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{user.role}</h1>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-5">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      title="Make Admin"
                      disabled={disabledAdminButtonId === user._id}
                      className="p-3 bg-red-400 hover:bg-red-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaUserShield />
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      title="Make Instructor"
                      disabled={disabledInstructorButtonId === user._id}
                      className="p-3 bg-yellow-400 hover:bg-yellow-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaUserTie />
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

export default ManageUser;
