import { heroBg } from "../../../assets/images"

const Hero = () => {
  return (
    <div className="relative w-full h-[600px]">
    <img src={heroBg} alt="HeroImage" className="absolute w-full h-full object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white mt-[-40px]">
      <h1 className="text-[50px] font-['lexend'] font-bold">Discover Unforgettable Encounters at</h1>
      <p className="text-[90px] text-[#ea0a52] font-['eone'] font-bold">SocialSync</p>
      <div className="flex flex-wrap justify-center gap-4 bg-[#5D0E41] bg-opacity-75 p-4 rounded-lg mt-[10px] pt-[20px]">
        <div className="text-[22px] font-[lexend] pt-[px]">
          <h1>Search Events</h1>
        </div>
        <div>
          <form action="">
            <input className="w-[300px] p-[5px] rounded-lg text-black" type="text" placeholder="What do you seek?" />
          </form>
        </div>
        <div className="relative font-[eone]">
          <select className="w-[150px] p-2 rounded-lg text-black">
            <option value="Category"disabled selected hidden>All</option>
            <option value="category1">Name</option>
            <option value="category2">Price Range</option>
            <option value="category3">Location</option>
          </select>
        </div>
        <button className="bg-[#ea0a52] text-white p-2 rounded-lg font-[eone]">Submit</button>
      </div>
    </div>
  </div>
  );
};

export default Hero