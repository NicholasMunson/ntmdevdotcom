import Logo from "./components/Logo";
import Links from "./components/Links";

export default function Header() {
  return (
    <header className="h-20 flex justify-between items-center">
      <Logo />
      <Links />
    </header>
  );
}
