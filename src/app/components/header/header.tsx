import Logo from "./components/Logo";
import Links from "./components/Links";

export default function Header() {
  return (
    <header className="h-20">
      <Logo />
      <div className="flex justify-end items-center h-full">
        <Links />
      </div>
    </header>
  );
}
