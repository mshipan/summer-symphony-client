import { Helmet } from "react-helmet";
import TopSlider from "./TopSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Summer Symphony</title>
      </Helmet>
      <TopSlider></TopSlider>
    </div>
  );
};

export default Home;
