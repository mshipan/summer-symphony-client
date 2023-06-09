const InstructorCard = ({ instructor }) => {
  const {
    cardImage,
    Image,
    instructorName,
    className,
    NumberofClasses,
    AvailableSeats,
    Students,
    email,
  } = instructor;
  return (
    <div className="w-full md:w-96 lg:w-96 rounded-lg bg-base-200">
      <div className="relative">
        <div className="overflow-hidden ">
          <img
            src={cardImage}
            alt="Popular Class Image"
            className="rounded-t-lg h-48 md:h-48 lg:h-48 w-full transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-16 right-2 md:right-10 lg:right-10 flex justify-center">
          <img
            src={Image}
            alt="Popular Class Image"
            className="rounded-full w-28 md:w-36 lg:w-36 border-8 border-yellow-500"
          />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-extrabold md:font-bold lg:font-bold font-OpenSans mb-2">
          {instructorName}
        </h1>
        <h3 className="text-base font-bold font-OpenSans mb-1">
          Email: {email}
        </h3>
        <p className="text-base font-bold font-OpenSans mb-1">
          Class: {className}
        </p>
        <p className="text-base font-bold font-OpenSans mb-1">
          Number of Classes: {NumberofClasses}
        </p>
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

export default InstructorCard;
