import arrow_btn from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";
import pause_btn from "../assets/pause_icon.png";
import space from "../assets/WhatsApp Image 2025-08-30 at 16.08.43_8666e673.jpg"

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <>
      <section>
        <div className="hero mt-[270px] mx-[120px]">
          <div className="hero-text text-white text-[110px] font-medium leading-32">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
          </div>
          <div className="hero-explorer flex items-center gap-[50px] w-fit mt-16 p-[5px,8px] pl-[30px] rounded-[60px] bg-white cursor-pointer">
            <p className="text-[#292929] text-xl font-medium">
              explore the feature
            </p>
            <img src={arrow_btn} alt="" />
          </div>
          <div className="hero-dot-play mt-32 flex justify-between">
            <ul className="hero-dots flex  text-3xl gap-6 text-amber-50 ml-5">
              <li
                onClick={() => setHeroCount(0)}
                className={` w-[15px] h-[15px] rounded-[7.5px] cursor-pointer duration-300 scale-75 transform ${
                  heroCount === 0
                    ? "hero-dot-orange bg-orange-500 scale-105 "
                    : " bg-white"
                }`}
              ></li>
              <li
                onClick={() => setHeroCount(1)}
                className={` w-[15px] h-[15px] rounded-[7.5px] cursor-pointer duration-300 scale-75 transform ${
                  heroCount === 1
                    ? "hero-dot-orange bg-orange-500 scale-105 "
                    : " bg-white"
                }`}
              ></li>
              <li
                onClick={() => setHeroCount(2)}
                className={` w-[15px] h-[15px] rounded-[7.5px] cursor-pointer duration-300 scale-75 transform ${
                  heroCount === 2
                    ? "hero-dot-orange bg-orange-500 scale-105 "
                    : " bg-white"
                }`}
              ></li>
            </ul>
            <div className="hero-play flex items-center gap-[30px] ">
              <img
                onClick={() => setPlayStatus(!playStatus)}
                src={playStatus ? pause_btn : play_icon}
                alt=""
              />
              <p className="text-white text-xl ">See the video</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2 mt-4">
        <div className="h-[70%] w-full">
          <img src={space} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
