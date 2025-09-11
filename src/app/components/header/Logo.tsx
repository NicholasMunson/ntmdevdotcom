"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/n.svg"
        alt="Logo"
        width={250}
        height={100}
        className="hover:animate-spin transition-transform duration-100 md:mb-3 md:ml-[-40px] pb[-10px]"
      />
    </>
  );
}
