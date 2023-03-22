import Container from "../Container";
import HeaderSection from "../HeaderSection";
import CardTestimonial from "./CardTestimonial";

export default function SectionTestimonial() {
  return (
    <section
      id="testimonial"
      className="xl:pb-[100px] pb-[65px] xl:mt-24 mt-16"
    >
      <Container>
        <HeaderSection
          section="Client Review"
          main="What Our Happy Client Say About Us"
        />
        <div className="flex flex-wrap xl:flex-nowrap xl:space-x-[55px] xl:space-y-0 space-y-[25px]">
          <div className="xl:w-4/12">
            <CardTestimonial
              title={`Website My Hospital`}
              description="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
              image={`/avatar-review-1.png`}
              nama="Katty Clock"
              job="CEO My Hospital"
            />
          </div>
          <div className="xl:w-4/12">
            <CardTestimonial
              title={`Logo F&B Corp`}
              description="Really the best service we've ever gotten, really looking forward to the next project"
              image={`/avatar-review-2.png`}
              nama="John Robert"
              job="CEO My Hospital"
            />
          </div>
          <div className="xl:w-4/12">
            <CardTestimonial
              title={`Supermarket Mobile Apps`}
              description="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
              image={`/avatar-review-3.png`}
              nama="Katty Clock"
              job="CEO My Hospital"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
