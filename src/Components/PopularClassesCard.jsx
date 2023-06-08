const PopularClassesCard = ({ popularClass }) => {
  const { Image, Name, InstructorName, AvailableSeats, Students } =
    popularClass;
  return (
    <div className="w-full md:w-96 lg:w-96 rounded-lg bg-base-200">
      <div className="overflow-hidden">
        <img
          src={Image}
          alt="Popular Class Image"
          className="rounded-t-lg h-48 md:h-60 lg:h-60 w-full transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-extrabold md:font-bold lg:font-bold font-OpenSans mb-2">
          {Name}
        </h1>
        <h3 className="text-base font-bold font-OpenSans mb-1">
          Instructor: {InstructorName}
        </h3>
        <p className="text-base font-bold font-OpenSans mb-1">
          Available seats: {AvailableSeats}
        </p>
        <p className="text-base font-bold font-OpenSans">
          Enrolled Students: {Students}
        </p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
