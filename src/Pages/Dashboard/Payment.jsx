import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectClass from "../../Hooks/useSelectClass";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
  const [selectClass] = useSelectClass();

  const { id } = useParams();

  const filterdClass = selectClass.filter((cl) => cl._id === id);

  const classPrice = filterdClass[0].price;

  const price = parseFloat(classPrice.toFixed(2));

  return (
    <div className="w-[75%] mx-auto">
      <Helmet>
        <title>Make Payment | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          Payment Details
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table shadow-xl rounded-none">
          {/* head */}
          <thead className="bg-[#c25934] text-white">
            <tr className="font-OpenSans">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Payable Amount</th>
            </tr>
          </thead>
          <tbody>
            {filterdClass.map((fclass, index) => (
              <tr key={fclass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={fclass.image} alt="Class Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-semibold">{fclass.name}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">{fclass.instructorName}</h1>
                </td>
                <td>
                  <h1 className="font-semibold">${fclass.price}</h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-xl my-3">Please Make Payment Now</h1>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm filterdClass={filterdClass} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
