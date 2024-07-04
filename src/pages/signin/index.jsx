import signImage from '../../assets/images/artclass.jpg';

const SignIn = () => {
  return (
    <div>
    <div className="flex h-screen ">
   <div className="w-1/2 bg-lightBlue place-content-center " >

     <div className="mx-auto w-fit flex flex-col items-start gap-y-4 ">
       <div className="flex flex-col text-5xl">
         <span className="font-thin ">Best Design of </span>
         <span className="font-bold ">Furniture Collections</span>

       </div>
       <p className="w-70">
         A small river named Duden flows by their place <br /> and supplies it with the necessary regelialia.
       </p>
       <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-cyan-900">Discover</button>
     </div>
   </div>

   <div className="w-1/2 " >
     <img src={signImage} alt="sign up and in background" className="object-cover w-full h-full" />
   </div>

 </div>

 </div>
  )
}

export default SignIn
