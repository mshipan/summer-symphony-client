import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import registerAnimation from "../../assets/register-animation.gif";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Register | Summer Symphony</title>
      </Helmet>
      <div className="bg-piano bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="bg-black bg-opacity-30 pt-32 pb-14">
          <div className="w-[75%] mx-auto">
            <h1 className="text-4xl font-OpenSans font-extrabold text-white">
              Registration
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto my-32">
        <h1 className="text-2xl font-OpenSans font-bold text-center my-10">
          Please Register
        </h1>
        <div className="flex items-center justify-center gap-32">
          <div className="hidden md:block lg:block">
            <img src={registerAnimation} alt="Register Animation" />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
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
                    {errors.password.type === "minLength" &&
                      "Password must be at least 6 characters long"}
                    {errors.password.type === "pattern" &&
                      "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                  </span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Confirm Password:</span>
                </label>
                <div className="flex items-center input input-bordered border-yellow-500 w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === watch("password"),
                    })}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="w-full focus:outline-none"
                  />
                  <span
                    onClick={toggleConfirmPasswordVisibility}
                    className="text-gray-500"
                  >
                    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500">Password Do not match</span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo URL:</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  name="photoUrl"
                  placeholder="Your Photo URL"
                  className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
                />
                {errors.photoUrl && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="mt-7">
                <input
                  className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white  transition duration-300 rounded-sm w-full cursor-pointer"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="divider">OR</div>
            <p className="text-left mb-2">Register With -</p>
            <div className="flex justify-center">
              <button className="btn btn-circle btn-primary">
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
            </div>
            <div className="mt-5">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-blue-500 hover:text-blue-900 hover:underline italic">
                    Please Login.
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

export default Registration;
