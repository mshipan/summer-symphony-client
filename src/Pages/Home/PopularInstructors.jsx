import { useEffect, useState } from "react";
import PopularInstructorCard from "../../Components/PopularInstructorCard";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popular-instructors")
      .then((res) => res.json())
      .then((data) => {
        setPopularInstructors(data);
      });
  }, []);
  return (
    <div className="my-20 md:my-32 lg:my-32 w-[75%] mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[#c25934] text-2xl font-bold">Meet Our</h3>
        <h1 className="text-[#0c4b65] text-3xl md:text-5xl lg:text-5xl font-bold mb-5 md:mb-10 lg:mb-10 text-center">
          Most Popular Instructors
        </h1>
        <p className="text-[#0c4b65] max-w-lg text-center">
          Learn from renowned maestros and accomplished artists at Summer
          Symphony&apos;s music summer camp, where popular instructors inspire
          greatness.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {popularInstructors.map((popularInstructor) => (
          <PopularInstructorCard
            key={popularInstructor._id}
            popularInstructor={popularInstructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
