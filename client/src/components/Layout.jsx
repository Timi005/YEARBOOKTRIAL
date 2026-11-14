import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Wraps every page: header on top, footer at the bottom, and the current
// page drawn where <Outlet /> sits.
export default function Layout() {
  return (
    <>
      <a href="#main" className="visually-hidden">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
