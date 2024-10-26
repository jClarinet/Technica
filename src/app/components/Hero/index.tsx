import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="hero">
      <div className="flex items-center justify-between text-5xl font-semibold">
        <h1>College Bored? Not anymore</h1>
        <p>This is a hero component built with Next.js.</p>
        <button>Learn More</button>
      </div>
    </section>
      
  );
};

export default Hero;