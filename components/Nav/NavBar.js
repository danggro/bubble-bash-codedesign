import Container from "../Container";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

export default function NavBar() {
  return (
    <nav id="home">
      <Container>
        <div className="flex items-center justify-between py-4 text-white">
          <NavLogo />
          <NavItem />
        </div>
      </Container>
    </nav>
  );
}
