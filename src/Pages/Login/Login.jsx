import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import loginAnimation from "../../assets/login-animation.gif";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "LoggedIn Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Login | Summer Symphony</title>
      </Helmet>
      <div className="bg-piano bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="bg-black bg-opacity-30 pt-32 pb-14">
          <div className="w-[75%] mx-auto">
            <h1 className="text-4xl font-OpenSans font-extrabold text-white">
              Login
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto my-32">
        <h1 className="text-2xl font-OpenSans font-bold text-center my-10">
          Please Login
        </h1>
        <div className="flex items-center justify-center gap-32">
          <div className="hidden md:block lg:block">
            <img src={loginAnimation} alt="Register Animation" />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <div className="flex items-center input input-bordered border-yellow-500 w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    name="password"
                    placeholder="Type your password"
                    className="w-full focus:outline-none"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="text-gray-500"
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-600 w-56">
                    {errors.password.type === "required" &&
                      "Password is required"}
                  </span>
                )}
              </div>

              <div className="mt-7">
                <input
                  className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white  transition duration-300 rounded-sm w-full cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <p className="text-left mb-2">Login With -</p>
            <div className="flex justify-center">
              <button className="btn btn-circle btn-primary">
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
            <div className="mt-5">
              <p>
                Don&apos;t have an account?{" "}
                <Link to="/register">
                  <span className="text-blue-500 hover:text-blue-900 hover:underline italic">
                    Please Register.
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
