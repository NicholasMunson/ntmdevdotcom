import Image from "next/image";
export default function Logo() {
  return (
    <div className="absolute top-[-75px] left-[-204px] px-8 md:px-16">
      <Image src="/ntmdevdotcom.png" alt="Logo" width={500} height={100} />
    </div>
  );
}
