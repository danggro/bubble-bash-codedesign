import FooterItemLink from "./FooterItemLink";

export default function FooterExplore() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Explore</h4>
      <ul>
        <FooterItemLink href="#">Resources</FooterItemLink>
        <FooterItemLink href="#">Blog</FooterItemLink>
        <FooterItemLink href="#">Documents</FooterItemLink>
      </ul>
    </div>
  );
}
