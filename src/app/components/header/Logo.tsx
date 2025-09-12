"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/N.svg"
        alt="Logo"
        width={180}
        height={72}
        className="transition-transform duration-300 hover:scale-105 active:scale-95 select-none"
      />
    </>
  );
}
