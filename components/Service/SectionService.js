import Container from "../Container";
import HeaderSection from "../HeaderSection";
import ArtMedium from "./LogoServices/ArtMedium";
import Branding from "./LogoServices/Branding";
import Code from "./LogoServices/Code";
import Figma from "./LogoServices/Figma";
import Illustration from "./LogoServices/Illustration";
import Video from "./LogoServices/Video";
import CardService from "./CardService";

export default function SectionService() {
  return (
    <section id="service" className="w-screen pt-16 bg-secondary">
      <Container>
        <HeaderSection section="Our Services" main="We Provide What You Need" />
        <div className="flex flex-wrap justify-between ">
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<Figma />}
              title="UI/UX Designer"
              description="We are ready to make your website more friendly and efficient in the eyes of users"
            />
          </div>
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<Code />}
              title="Web Development"
              description="Want to create a website that has many features? We have the answer for you. "
            />
          </div>
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<ArtMedium />}
              title="Content Writer"
              description="We provide interesting content and can attract customers for you"
            />
          </div>
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<Branding />}
              title="Branding"
              description="Create visual branding with amazing result, you just sit back and relax"
            />
          </div>
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<Video />}
              title="Editing Video"
              description="Want to create a website that has many features? We have the answer for you. "
            />
          </div>
          <div className="w-3/12 mx-5 mb-14">
            <CardService
              logo={<Illustration />}
              title="Illustration"
              description="Create beauty illustrasion as you need, and make it interesting"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
