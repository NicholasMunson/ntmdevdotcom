"use client";
import Image from "next/image";

export default function Logo() {
  const src = "/N.svg";
  return (
    <>
      <Image
        src={src}
        alt="Logo"
        width={180}
        height={72}
        priority
        className="transition-transform duration-300 hover:scale-105 active:scale-95 select-none"
      />
    </>
  );
}
