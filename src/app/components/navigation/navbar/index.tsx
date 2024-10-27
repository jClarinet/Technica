'use client';
import React from "react";
import Link from "next/link";
import { usePathname} from 'next/navigation';
import Logo from "./Logo";



const Navbar = () => {
  const links = [
    { name: 'Stats', href: '/stats'},
    { name: 'AP', href: '/AP'},
    { name: 'SAT', href: '/SAT' },
    { name: 'Home', href: '/'},
    
  ];
  const pathname = usePathname();
  return (
    <>

    <div className=" bg-bluegrotto align-items justify-end  p-5  text-2xl  flow-root pr-16 pl-16 space-x-6">
    <div className="float-left">
       <Logo/>

      </div>
      
    {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={"float-right space-x-20 text-navy flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3  text-xl font-medium  hover:text-white hover:font-semibold md:flex-none md:justify-start md:p-2 md:px-3"}>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      </div>
    </>
  );
};

export default Navbar;
