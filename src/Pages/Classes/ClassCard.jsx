import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectClass from "../../Hooks/useSelectClass";

const ClassCard = ({ classe }) => {
  const { image, name, instructorName, availableSeats, price, _id } = classe;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useSelectClass();

  const handleSelectClass = (classe) => {
    console.log(classe);
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        name,
        image,
        price,
        instructorName,
        availableSeats,
        email: user.email,
      };
      fetch("http://localhost:5000/selectClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class Selected Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to select",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="w-full md:w-96 lg:w-96 rounded-lg bg-base-200">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Popular Class Image"
          className="rounded-t-lg h-48 md:h-60 lg:h-60 w-full transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-extrabold md:font-bold lg:font-bold font-OpenSans mb-2">
          {name}
        </h1>
        <h3 className="text-base font-bold font-OpenSans mb-1">
          Instructor: {instructorName}
        </h3>
        <p className="text-base font-bold font-OpenSans mb-1">
          Available seats: {availableSeats}
        </p>

        <p className="text-base font-bold font-OpenSans">Price: ${price}</p>
      </div>
      <div className="flex w-full justify-center mb-5">
        <button
          onClick={() => handleSelectClass(classe)}
          className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white transition duration-300 rounded-sm"
        >
          Select Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
