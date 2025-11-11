import Logo from "./ui/logo";
import ThemeToggle from "./ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground flex flex-col items-center">
      <div className="flex gap-18">
        <Logo />
        <ThemeToggle />
      </div>
      <div>
        <h1>The new way of predicting Premiere League results</h1>
      </div>
    <footer className="">
    </footer>
    </div>
  );
}
