import { Helmet } from "react-helmet";
import TopSlider from "./TopSlider";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Summer Symphony</title>
      </Helmet>
      <TopSlider></TopSlider>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
