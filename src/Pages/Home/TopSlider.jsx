import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const TopSlider = () => {
  return (
    <>
      <Swiper
        navigation={false}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="relative">
              <img
                src={banner1}
                alt="Banner image"
                className="w-full h-[50rem]"
              />
              <div className="bg-black bg-opacity-30 w-full h-[50rem] absolute top-0"></div>
            </div>
            <div className="absolute left-0 right-0 top-1/3">
              <div className="flex flex-col items-center">
                <h3 className="font-Spicy text-3xl text-yellow-500">
                  Playing Guitar
                </h3>
                <h1 className="font-Spicy text-7xl text-white mb-7">
                  Really Easy
                </h1>
                <p className="text-white font-OpenSans max-w-lg text-center mb-16">
                  Discover the joy of playing guitar at Summer Symphony&apos;s
                  music summer camp, where learning meets harmony.
                </p>
                <button className="bg-[#c25934] hover:bg-white px-5 py-2 font-OpenSans uppercase font-bold text-white hover:text-[#0c4b65] transition duration-300 rounded-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="relative">
              <img
                src={banner2}
                alt="Banner image"
                className="w-full h-[50rem]"
              />
              <div className="bg-black bg-opacity-30 w-full h-[50rem] absolute top-0"></div>
            </div>
            <div className="absolute left-0 right-0 top-1/3">
              <div className="flex flex-col items-center">
                <h3 className="font-Spicy text-3xl text-yellow-500">Start</h3>
                <h1 className="font-Spicy text-7xl text-white mb-7">
                  With a Note
                </h1>
                <p className="text-white font-OpenSans max-w-lg text-center mb-16">
                  Unleash your inner virtuoso as you learn violin at Summer
                  Symphony&apos;s music summer camp, where melodies come alive.
                </p>
                <button className="bg-[#c25934] hover:bg-white px-5 py-2 font-OpenSans uppercase font-bold text-white hover:text-[#0c4b65] transition duration-300 rounded-sm">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="relative">
              <img
                src={banner3}
                alt="Banner image"
                className="w-full h-[50rem]"
              />
              <div className="bg-black bg-opacity-30 w-full h-[50rem] absolute top-0"></div>
            </div>
            <div className="absolute left-0 right-0 top-1/3">
              <div className="flex flex-col items-center">
                <h3 className="font-Spicy text-3xl text-yellow-500">Music</h3>
                <h1 className="font-Spicy text-7xl text-white mb-7">
                  For Everyone
                </h1>
                <p className="text-white font-OpenSans max-w-lg text-center mb-16">
                  Unlock the keys to musical enchantment with piano lessons at
                  Summer Symphony&apos;s music summer camp, where talent
                  resonates.
                </p>
                <button className="bg-[#c25934] hover:bg-white px-5 py-2 font-OpenSans uppercase font-bold text-white hover:text-[#0c4b65] transition duration-300 rounded-sm">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;
