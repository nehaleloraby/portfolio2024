import React from 'react';
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <Spotlight className="absolute top-1/3 left-1/3 transform -translate-x-full -translate-y-full h-[60vh] w-[60vh] opacity-50" fill="rgba(255, 255, 255, 0.5)" />
        <Spotlight className="absolute top-1/3 right-1/3 transform translate-x-full -translate-y-full h-[60vh] w-[60vh] opacity-50" fill="rgba(200, 100, 200, 0.4)" />
        <Spotlight className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-[50vh] w-[50vh] opacity-40" fill="rgba(100, 100, 255, 0.4)" />
      </div>

      <div className="h-screen w-full dark:bg-lavender bg-pastel-pink relative flex items-center justify-center bg-opacity-25">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-pastel-pink/[0.1] dark:bg-lavender/[0.07] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome! 
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I'M NEHAL ELORABY"
          /> 

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"> 
            A Philadelphia-based developer focused on creating intuitive, accessible solutions
          </p>

          <a href="#about">
            <MagicButton
                title="Explore my projects"
                icon={<FaLocationArrow />}
                position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;



