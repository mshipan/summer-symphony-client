const ClassCard = ({ classe }) => {
  const { Image, Name, InstructorName, AvailableSeats, Price } = classe;
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

        <p className="text-base font-bold font-OpenSans">Price: ${Price}</p>
      </div>
      <div className="flex w-full justify-center mb-5">
        <button className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white transition duration-300 rounded-sm">
          Select Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
