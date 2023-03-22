import FooterItemLink from "./FooterItemLink";

export default function FooterPages() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Pages</h4>
      <ul>
        <FooterItemLink href="#home">Home</FooterItemLink>
        <FooterItemLink href="#service">Our Service</FooterItemLink>
        <FooterItemLink href="#project">Portofolio</FooterItemLink>
        <FooterItemLink href="#testimonial">Testimonial</FooterItemLink>
        <FooterItemLink href="#contact">Contact Us</FooterItemLink>
      </ul>
    </div>
  );
}
