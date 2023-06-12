import { Helmet } from "react-helmet";
import TopSlider from "./TopSlider";
import PopularClasses from "./PopularClasses";
import AboutSchool from "./AboutSchool";
import PopularInstructors from "./PopularInstructors";
import WhyChooseUs from "./WhyChooseUs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade>
      <Helmet>
        <title>Home | Summer Symphony</title>
      </Helmet>
      <TopSlider></TopSlider>
      <PopularClasses></PopularClasses>
      <AboutSchool></AboutSchool>
      <PopularInstructors></PopularInstructors>
      <WhyChooseUs></WhyChooseUs>
    </Fade>
  );
};

export default Home;
