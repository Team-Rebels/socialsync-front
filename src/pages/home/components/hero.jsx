import { heroBg } from "../../../assets/images"

const Hero = () => {
  return (
    <div className="flex">
      <div className="absolute text-center mt-[153px] ml-[80px] w-[1171px] text-[40px]">
        <h1 className="text-white text-[50px] font-['lexend']">Discover Unforgettable Encounters at</h1>
        <p className="text-[45px] text-[#ea0a52] font-['lexend'] font-bold">SocialSync</p>
        <input className="w-[519px]" type="text" />
      </div>
      <img src={heroBg} alt="HeroImage" className="static h-[1083px] top-0 left-0" />
      <h1 className="absolute text-center mt-[550px] ml-[85px] w-[1171px] text-[50px] font-['lexend']
        font-bold text-[#ea0a52]">Top 3 Trending Events</h1>
    </div>
  );
};

export default Hero