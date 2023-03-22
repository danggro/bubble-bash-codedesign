import Container from "../Container";
import FooterCompany from "./FooterCompany";
import FooterExplore from "./FooterExplore";
import FooterLogo from "./FooterLogo";
import FooterPages from "./FooterPages";
import FooterSosmed from "./FooterSosmed";

export default function Footer() {
  return (
    <footer className="pt-[130px] pb-16">
      <Container>
        <div className="flex justify-between">
          <div className="w-6/12 pr-16">
            <FooterLogo />
            <p className="mt-4 mb-8 text-lg opacity-70">
              Introducing, We are Bubble Bash digital agency company with more
              than 6 years of experience. We are committed to serve with all our
              heart
            </p>
            <div className="flex items-center space-x-6">
              <FooterSosmed />
            </div>
          </div>
          <div className="flex justify-between w-5/12">
            <FooterPages />
            <FooterExplore />
            <FooterCompany />
          </div>
        </div>
      </Container>
    </footer>
  );
}
