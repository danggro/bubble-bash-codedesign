import Link from "next/link";
import Facebook from "./LogoSosmed/Facebook";
import Instagram from "./LogoSosmed/Instagram";
import Linkedin from "./LogoSosmed/Linkedin";
import Twitter from "./LogoSosmed/Twitter";

export default function FooterSosmed() {
  return (
    <>
      <Link
        target="_blank"
        href="http://www.facebook.com"
        className="hover:text-green"
      >
        <Facebook />
      </Link>
      <Link
        target="_blank"
        href="http://www.facebook.com"
        className="hover:text-green"
      >
        <Twitter />
      </Link>
      <Link
        target="_blank"
        href="http://www.facebook.com"
        className="hover:text-green"
      >
        <Instagram />
      </Link>
      <Link
        target="_blank"
        href="http://www.facebook.com"
        className="hover:text-green"
      >
        <Linkedin />
      </Link>
    </>
  );
}
