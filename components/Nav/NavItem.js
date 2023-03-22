import NavItemLink from "./NavItemLink";

export default function NavItem() {
  return (
    <ul className="flex items-center space-x-10">
      <NavItemLink href="#home">Home</NavItemLink>
      <NavItemLink href="#service">Our Services</NavItemLink>
      <NavItemLink href="#project">Portofolio</NavItemLink>
      <NavItemLink href="#testimonial">Testimonial</NavItemLink>
      <NavItemLink href="#contact">Contact Us</NavItemLink>
    </ul>
  );
}
