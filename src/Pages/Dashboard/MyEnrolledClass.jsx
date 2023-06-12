import { Helmet } from "react-helmet";
import usePaymentHistory from "../../Hooks/usePaymentHistory";

const MyEnrolledClass = () => {
  const [paymentData] = usePaymentHistory();
  return (
    <div className="w-[75%] mx-auto">
      <Helmet>
        <title>My Enrolled Classes | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          My Enrolled Classes
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

              <th className="text-center">Enrolled Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((pData, index) => (
              <tr key={pData._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={pData.classImage} alt="Class Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-semibold">{pData.className}</h1>
                </td>

                <td>
                  <h1 className="font-semibold">{pData.instructorName}</h1>
                </td>

                <td>
                  <h1 className="font-semibold text-center">
                    {new Date(pData.date).toLocaleDateString()}
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
