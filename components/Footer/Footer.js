import Container from "../Container";
import FooterCompany from "./FooterCompany";
import FooterExplore from "./FooterExplore";
import FooterLogo from "./FooterLogo";
import FooterPages from "./FooterPages";
import FooterSosmed from "./FooterSosmed";

export default function Footer() {
  return (
    <footer className="xl:pt-[130px] pt-[80px] pb-16">
      <Container>
        <div className="justify-between xl:flex">
          <div className="pr-16 xl:w-6/12">
            <FooterLogo />
            <p className="mt-4 mb-4 text-lg xl:mb-8 opacity-70">
              Introducing, We are Bubble Bash digital agency company with more
              than 6 years of experience. We are committed to serve with all our
              heart
            </p>
            <div className="flex items-center space-x-6">
              <FooterSosmed />
            </div>
          </div>
          <div className="justify-between w-5/12 mt-10 space-y-10 xl:space-y-10 xl:mt-0 xl:flex">
            <FooterPages />
            <FooterExplore />
            <FooterCompany />
          </div>
        </div>
      </Container>
    </footer>
  );
}
