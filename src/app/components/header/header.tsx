import Logo from "./components/Logo";
import Links from "./components/Links";

export default function Header() {
  return (
    <header className="h-30 flex justify-between items-center pt-4 px-4">
      <Logo />
      <Links />
    </header>
  );
}
