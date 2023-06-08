import { Helmet } from "react-helmet";
import TopSlider from "./TopSlider";
import PopularClasses from "./PopularClasses";
import AboutSchool from "./AboutSchool";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Summer Symphony</title>
      </Helmet>
      <TopSlider></TopSlider>
      <PopularClasses></PopularClasses>
      <AboutSchool></AboutSchool>
    </div>
  );
};

export default Home;
