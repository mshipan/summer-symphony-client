const PopularClassesCard = ({ popularClass }) => {
  const { Image, Name, InstructorName, AvailableSeats, Students } =
    popularClass;
  return (
    <div>
      <div>
        <img src={Image} alt="Popular Class Image" />
      </div>
      <div>
        <h1>{Name}</h1>
        <h3>Instructor: {InstructorName}</h3>
        <p>Available seats: {AvailableSeats}</p>
        <p>Enrolled Students: {Students}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
