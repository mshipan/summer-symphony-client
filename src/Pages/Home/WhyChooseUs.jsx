import people from "../../assets/groupofpeople.jpg";
import guitar from "../../assets/playingguitar.jpg";
import piano from "../../assets/playingpiano.jpg";

const WhyChooseUs = () => {
  return (
    <div className="mb-32">
      <h1 className="text-3xl font-OpenSans font-bold text-[#c25934] text-center mb-6">
        Why Choose Us?
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-5">
        <div className="p-5 shadow-2xl">
          <img src={people} alt="People Image" className="w-80" />
          <h1 className="text-lg font-thin font-OpenSans my-3">
            Best Instructors
          </h1>
          <p className="font-thin font-OpenSans max-w-xs text-justify">
            Our goal is to make the performing arts approachable and affordable
            to students of every skill level and every age,help you to explore
            your creativity.
          </p>
        </div>
        <div className="p-5 shadow-2xl">
          <img src={guitar} alt="People Image" className="w-80" />
          <h1 className="text-lg font-thin font-OpenSans my-3">
            Award-Winning Process
          </h1>
          <p className="font-thin font-OpenSans max-w-xs text-justify">
            Whether you are taking your first steps into music and dance,
            returning to an old passion, or looking to hone your talents to a
            professional level.
          </p>
        </div>
        <div className="p-5 shadow-2xl">
          <img src={piano} alt="People Image" className="w-80" />
          <h1 className="text-lg font-thin font-OpenSans my-3">
            Great Community
          </h1>
          <p className="font-thin font-OpenSans max-w-xs text-justify">
            Research has shown that young people who study music outperform in
            academics due to the enhanced brain development and focus, can help
            build confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
