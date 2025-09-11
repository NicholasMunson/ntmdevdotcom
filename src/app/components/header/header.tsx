import Logo from "./Logo";
import Links from "./Links";
import Intro from "./Intro";

export default function Header() {
  return (
    <header className="md:h-30 h-33 flex justify-between items-center bg-[#76a7bc] flex-col md:flex-row">
      <Logo />
      <div className="hidden lg:flex">
        <Intro />
      </div>
      <Links />
    </header>
  );
}
