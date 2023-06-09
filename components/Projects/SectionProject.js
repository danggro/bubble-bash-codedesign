import Container from "../Container";
import HeaderSection from "../HeaderSection";
import CardProject from "./CardProject";

export default function SectionProject() {
  return (
    <section id="project" className="xl:pt-[100px] pt-[65px]">
      <Container>
        <HeaderSection section="Our Portofolio's" main="Recent Projects" />
        <div className="flex flex-wrap xl:flex-nowrap xl:space-x-[66px] xl:space-y-0 space-y-10">
          <div className="xl:w-4/12">
            <CardProject
              image="/project-1.png"
              title="Website My Hospital"
              description="Create a hospital website with patient, doctor, and drug logistics features that help hospital operations"
            />
          </div>
          <div className="xl:w-4/12">
            <CardProject
              image="/project-2.png"
              title="Food & Beverages Corp Logo"
              description="Create a logo for a food & beverage company, with emphasis on aesthetics and user requests"
            />
          </div>
          <div className="xl:w-4/12">
            <CardProject
              image="/project-3.png"
              title="Supermarket Mobile Apps"
              description="Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
