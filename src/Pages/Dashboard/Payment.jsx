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
          Make Payment
        </h1>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
