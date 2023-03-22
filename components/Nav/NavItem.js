import NavItemLink from "./NavItemLink";

export default function NavItem() {
  return (
    <ul className="flex flex-col justify-start p-10 space-y-5 xl:p-0 xl:space-y-0 xl:space-x-10 xl:flex-row xl:text-white text-green">
      <NavItemLink href="#home">Home</NavItemLink>
      <NavItemLink href="#service">Our Services</NavItemLink>
      <NavItemLink href="#project">Portofolio</NavItemLink>
      <NavItemLink href="#testimonial">Testimonial</NavItemLink>
      <NavItemLink href="#contact">Contact Us</NavItemLink>
    </ul>
  );
}
