import { Helmet } from "react-helmet";
import useClass from "../../Hooks/useClass";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes] = useClass();
  return (
    <div>
      <Helmet>
        <title>Classes | Summer Symphony</title>
      </Helmet>
      <div className="bg-piano bg-no-repeat bg-cover bg-center bg-fixed mb-14">
        <div className="bg-black bg-opacity-30 pt-32 pb-14">
          <div className="w-[75%] mx-auto">
            <h1 className="text-4xl font-OpenSans font-extrabold text-white">
              Our Classes
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[75%] mx-auto my-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {classes.map((classe) => (
            <ClassCard key={classe._id} classe={classe}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
