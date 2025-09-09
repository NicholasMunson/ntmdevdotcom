"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-[-75px] left-[-204px] px-8 md:px-16">
      <div className="relative">
        <Image
          src="/ntmdevdotcom.png"
          alt="Logo"
          width={500}
          height={100}
          className="transition-transform duration-300"
        />
        <div
          className="absolute w-[110px] h-[110px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          onMouseEnter={(e) => {
            const img = e.currentTarget.parentElement?.querySelector("img");
            if (img) img.style.animation = "spin 1s linear infinite";
          }}
          onMouseLeave={(e) => {
            const img = e.currentTarget.parentElement?.querySelector("img");
            if (img) img.style.animation = "none";
          }}
        ></div>
      </div>
    </div>
  );
}
