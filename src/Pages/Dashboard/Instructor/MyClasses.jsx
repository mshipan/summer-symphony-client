import { Helmet } from "react-helmet";
import { FaEdit } from "react-icons/fa";
import useCreateClass from "../../../Hooks/useCreateClass";
import useAuth from "../../../Hooks/useAuth";

const MyClasses = () => {
  const [createClass] = useCreateClass();
  console.log(createClass);
  const { user } = useAuth();
  console.log(user);
  const myClass = createClass.filter(
    (cls) => cls.instructorEmail === user.email
  );
  return (
    <div className="w-[75%] mx-auto">
      <Helmet>
        <title>My Classes | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          My Classes
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
              <th>Enrolled Students</th>
              <th>Status</th>
              <th>Feedback</th>
              <th className="text-center"> Update</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((cls, index) => (
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
                  <h1 className="font-semibold">{cls.students}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{cls.status}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">Feedback</h1>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-5">
                    <button
                      //   onClick={() => handleMakeInstructor(user)}
                      title="Update"
                      //   disabled={disabledInstructorButtonId === user._id}
                      className="p-3 bg-yellow-400 hover:bg-yellow-700 text-black hover:text-white transition duration-300 "
                    >
                      {/* <FaUserTie /> */}
                      <FaEdit></FaEdit>
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

export default MyClasses;
