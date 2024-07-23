import React from "react";
import BgImage from "../../assets/icecreambackgroung.png";
import icecream from "../../assets/icecream.png";
import Navbar from "../Navbar/Navbar"

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section */}
          <Navbar />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">Blvck Tumblr</h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Ice cream codes stream</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi ab repellendus, quo praesentium recusandae repellat error? Pariatur quasi illum nulla quisquam placeat. Numquam ex quidem deserunt rem aliquam unde?
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className="relative">
              <img src={icecream} className="relative z-40 h-[200px] md:h-[700px] md:w-[700px] img-shadow" 
              alt="Ice Cream" />
              {/* pinkpuple circle */}
              <div className=" h-[180px] w-[180px] absolute top-24 -right-16
               border-primary border-[20px] rounded-full z-10">
              </div>
              {/* big text section  */}
              <div className="absolute -top-2 left-[200px] z-[1]">
              <h1 className="text-[140px] scale-150 font-old text-darkGray/40 leading-none">EYEzz</h1>
              </div>
            </div>
            {/* third div section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">Blvck Tumblr</h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Ice cream codes stream</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi ab repellendus, quo praesentium recusandae repellat error? Pariatur quasi illum nulla quisquam placeat. Numquam ex quidem deserunt rem aliquam unde?
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
