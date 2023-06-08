import aboutImg from "../../assets/piano.jpg";

const AboutSchool = () => {
  return (
    <div className="bg-school-bg bg-opacity-50 bg-no-repeat bg-cover bg-fixed">
      <div className="bg-[#0c4b65] bg-opacity-70 py-28">
        <div className="w-[75%] mx-auto flex items-center justify-center gap-10">
          <div>
            <h3 className="font-OpenSans text-4xl font-bold text-white mb-5">
              About Our School
            </h3>
            <div className="max-w-lg">
              <p className="font-OpenSans text-lg font-bold text-yellow-500 mb-5">
                Experience a harmonious journey of music at Summer Symphony, the
                ultimate destination for aspiring musicians. Immerse yourself in
              </p>
              <p className="text-base font-OpenSans text-white mb-5">
                our music summer camp, where talented instructors nurture your
                skills in guitar, violin, piano, and more. Unleash your passion,
                ignite your creativity, and make lifelong melodies in a vibrant
                musical community.
              </p>
            </div>
            <button className="bg-[#c25934] hover:bg-white px-5 py-2 font-OpenSans uppercase font-bold text-white hover:text-[#0c4b65] transition duration-300 rounded-sm">
              View All
            </button>
          </div>
          <div>
            <img src={aboutImg} alt="About Image" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
