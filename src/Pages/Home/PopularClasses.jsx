import PopularClassesCard from "../../Components/PopularClassesCard";
import useClass from "../../Hooks/useClass";

const PopularClasses = () => {
  const [classes] = useClass();
  return (
    <div className="my-20 md:my-32 lg:my-32 w-[75%] mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[#c25934] text-2xl font-bold">Our Most</h3>
        <h1 className="text-[#0c4b65] text-3xl md:text-5xl lg:text-5xl font-bold mb-5 md:mb-10 lg:mb-10">
          Popular Classes
        </h1>
        <p className="text-[#0c4b65] max-w-lg text-center">
          Explore the hottest classes at Summer Symphony&apos;s music summer
          camp, where popular melodies and rhythms take center stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {classes.slice(0, 6).map((popularClass) => (
          <PopularClassesCard
            key={popularClass._id}
            popularClass={popularClass}
          ></PopularClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
