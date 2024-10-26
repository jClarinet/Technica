'use client';
import React from "react";
import Link from "next/link";
import { usePathname} from 'next/navigation';



const Navbar = () => {
  const links = [
    { name: 'AP', href: '/AP/AP'},
    { name: 'SAT', href: '/SAT' },
    { name: 'Stats', href: '/Stats'},
    { name: 'About', href: '/'},
  ];
  const pathname = usePathname();
  return (
    <>
    {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"}>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}

    </>
  );
};

export default Navbar;
