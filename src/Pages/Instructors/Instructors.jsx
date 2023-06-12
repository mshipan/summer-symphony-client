import { Helmet } from "react-helmet";
import useInstructor from "../../Hooks/useInstructor";
import InstructorCard from "./InstructorCard";
import { Fade } from "react-awesome-reveal";
const Instructors = () => {
  const [instructors] = useInstructor();
  return (
    <Fade>
      <Helmet>
        <title>Instructors | Summer Symphony</title>
      </Helmet>
      <div className="bg-piano bg-no-repeat bg-cover bg-center bg-fixed mb-14">
        <div className="bg-black bg-opacity-30 pt-32 pb-14">
          <div className="w-[75%] mx-auto">
            <h1 className="text-4xl font-OpenSans font-extrabold text-white">
              Our Instructors
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[75%] mx-auto my-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Instructors;
