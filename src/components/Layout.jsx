import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Layout({ children }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        {/* <Header /> */}
        <header>header</header>
        <main className="flex-auto">{children}</main>
        {/* <Footer /> */}
        <footer>footer</footer>
      </div>
    </>
  );
}