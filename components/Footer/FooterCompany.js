import FooterItemLink from "./FooterItemLink";

export default function FooterCompany() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Company</h4>
      <ul>
        <FooterItemLink href="#about">About Us</FooterItemLink>
        <FooterItemLink href="#">Partners</FooterItemLink>
        <FooterItemLink href="#testimonial">Customers</FooterItemLink>
        <FooterItemLink href="#contact">Contact Us</FooterItemLink>
      </ul>
    </div>
  );
}
