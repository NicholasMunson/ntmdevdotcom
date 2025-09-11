"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="">
      <Image
        src="/n.svg"
        alt="Logo"
        width={250}
        height={100}
        className="hover:animate-spin transition-transform duration-100 mb-3 ml-[-40px]"
      />
    </div>
  );
}
