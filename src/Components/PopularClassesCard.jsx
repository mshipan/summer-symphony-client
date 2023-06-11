const PopularClassesCard = ({ popularClass }) => {
  const { image, name, instructorName, availableSeats, students } =
    popularClass;
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
        <p className="text-base font-bold font-OpenSans">
          Enrolled Students: {students}
        </p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
