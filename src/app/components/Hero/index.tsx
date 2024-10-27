'use client';
import React from "react";

import Link from "next/link";
import Image from 'next/image';



const Hero = () => {
  return (
    <section style={{ 
      backgroundImage: `url(../images/background.png)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      minHeight: '100vh'}}>
      <div className="block ml-10 text-center items-center justify-center text-6xl pt-52 font-semibold text-bluegrotto leading-relaxed">
        <p className="font-bold text-white">Welcome to StudyBuddy</p>
        <h1>College Bored? Not anymore</h1>
        
        <Link className="text-xl rounded-full bg-white p-5 " href="/about">About StudyBuddy</Link>
      </div>
    </section>
      
  );
};

export default Hero;