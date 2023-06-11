import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_host_token = import.meta.env.VITE_img_up_token;
const AddaClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
    reset,
  } = useForm({
    defaultValues: {
      instructorName: user.displayName,
      instructorEmail: user.email,
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_host_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {
            availableSeats,
            instructorName,
            instructorEmail,
            name,
            price,
          } = data;
          const newClass = {
            availableSeats: parseFloat(availableSeats),
            instructorName,
            instructorEmail,
            name,
            price: parseFloat(price),
            image: imgURL,
          };
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your class has been added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center w-[75%] mx-auto my-20">
      <Helmet>
        <title>Add a Class | Dashboard</title>
      </Helmet>
      <div className="my-8">
        <h1 className="text-4xl font-OpenSans font-bold text-center">
          Add a Class
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center">
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Class Name:</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Type your Class Name"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
              {errors.name && (
                <span className="text-red-500">Class Name is required</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Class Image:</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                name="image"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
              {errors.image && (
                <span className="text-red-500">Class Image is required</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Instructor Name:
                  <small className="ml-1 italic text-gray-400">
                    Data From LoggedIn User
                  </small>
                </span>
              </label>
              <input
                type="text"
                defaultValue={defaultValues.instructorName}
                disabled
                {...register("instructorName")}
                name="instructorName"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Instructor Email:
                  <small className="ml-1 italic text-gray-400">
                    Data From LoggedIn User
                  </small>
                </span>
              </label>
              <input
                type="email"
                defaultValue={defaultValues.instructorEmail}
                disabled
                {...register("instructorEmail")}
                name="instructorEmail"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Seats:</span>
              </label>
              <input
                type="number"
                {...register("availableSeats", { required: true })}
                name="availableSeats"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
              {errors.availableSeats && (
                <span className="text-red-500">Available Seat is required</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                name="price"
                className="input input-bordered border-yellow-500 w-full max-w-xs focus:outline-none"
              />
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-7">
          <input
            className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white  transition duration-300 rounded-sm cursor-pointer"
            type="submit"
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddaClass;
