import { heroBg } from "../../../assets/images"

const Hero = () => {
  return (
    <div className="relative w-full h-[700px]">
    <img src={heroBg} alt="HeroImage" className="absolute w-full h-full object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-[50px] font-['lexend']">Discover Unforgettable Encounters at</h1>
      <p className="text-[90px] text-[#ea0a52] font-['lexend'] font-bold mb-5">SocialSync</p>
      <div className="flex flex-wrap justify-center gap-4 bg-[#ea0a52] bg-opacity-75 p-4 rounded-lg mt-[40px] pt-[20px]">
        <div className="text-[22px] font-[eone] pt-[5px]">
          <h1>Search Events</h1>
        </div>
        <div className="relative">
          <select className="w-[200px] p-2 rounded-lg text-black">
            <option value="Date" disabled selected hidden>Date</option>
            <option value="date1">Date 1</option>
            <option value="date2">Date 2</option>
            <option value="date3">Date 3</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-[200px] p-2 rounded-lg text-black">
            <option value="Location" disabled selected hidden>Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-[200px] p-2 rounded-lg text-black">
            <option value="Category"disabled selected hidden>Category</option>
            <option value="category1">Comedy</option>
            <option value="category2">Music</option>
            <option value="category3">Theatre</option>
            <option value="category1">Tour</option>
            <option value="category2">Movies</option>
            <option value="category3">Pageant</option>
          </select>
        </div>
        <button className="bg-[#ea0a52] text-white p-2 rounded-lg">Submit</button>
      </div>
    </div>
  </div>
  );
};

export default Hero