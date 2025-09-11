import Logo from "./Logo";
import Links from "./Links";
import Intro from "./Intro";

export default function Header() {
  return (
    <header className="h-30 flex justify-between items-center bg-[#76a7bc]">
      <Logo />
      <Intro />
      <Links />
    </header>
  );
}
