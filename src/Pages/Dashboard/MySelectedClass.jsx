import { Helmet } from "react-helmet";
import useSelectClass from "../../Hooks/useSelectClass";
import { FaTrash, FaMoneyCheck } from "react-icons/fa";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [selectClass, refetch] = useSelectClass();

  const handleDelete = (sclass) => {
    Swal.fire({
      title: "Are you sure to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectClass/${sclass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your Class has been deleted successfully.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="w-[75%] mx-auto">
      <Helmet>
        <title>My Selected Classes | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          My Selected Classes
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
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {selectClass.map((sclass, index) => (
              <tr key={sclass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={sclass.Image} alt="Class Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-semibold">{sclass.Name}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{sclass.InstructorName}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">${sclass.Price}</h1>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-5">
                    <button
                      onClick={() => handleDelete(sclass)}
                      title="Delete"
                      className="p-3 bg-red-400 hover:bg-red-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaTrash />
                    </button>
                    <button
                      title="Pay"
                      className="p-3 bg-yellow-400 hover:bg-yellow-700 text-black hover:text-white transition duration-300 "
                    >
                      <FaMoneyCheck />
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

export default MySelectedClass;
