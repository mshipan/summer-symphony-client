import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/error-animation.gif";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <img src={errorAnimation} alt="Error Gif" />
      </div>
      <div>
        <h1 className="font-Spicy text-5xl text-center mb-5">
          Status {status || 404}
        </h1>
        <h1 className="font-OpenSans text-2xl text-center">{error.message}</h1>
        <Link to="/">
          <div className="flex justify-center mt-7">
            <button className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white  transition duration-300 rounded-sm cursor-pointer">
              Back to Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
