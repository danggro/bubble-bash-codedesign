import { useState } from "react";
import Container from "../Container";
import Close from "./Close";
import Menu from "./Menu";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

export default function NavBar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <nav id="home">
        <Container>
          <div className="items-center justify-between hidden py-4 text-white xl:flex">
            <NavLogo />
            <NavItem />
          </div>
          <div className="flex items-center justify-between py-4 xl:hidden">
            <NavLogo />
            <div className="text-white" onClick={() => setOffcanvas(true)}>
              <Menu />
            </div>
          </div>
        </Container>
        <div
          className={`fixed top-0 transition-all z-50 w-full h-screen xl:hidden bg-secondary ${
            offcanvas ? "right-0" : "-right-full"
          }`}
        >
          <NavItem />
          <div className="absolute right-10 top-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-x"
              viewBox="0 0 24 24"
              onClick={() => setOffcanvas(false)}
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
