import Container from "../Container";
import HeaderSection from "../HeaderSection";
import CardTestimonial from "./CardTestimonial";

export default function SectionTestimonial() {
  return (
    <section id="testimonial" className="pb-[100px] mt-24">
      <Container>
        <HeaderSection
          section="Client Review"
          main="What Our Happy Client Say About Us"
        />
        <div className="flex space-x-[55px]">
          <div className="w-4/12">
            <CardTestimonial
              title={`Website My Hospital`}
              description="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
              image={`/avatar-review-1.png`}
              nama="Katty Clock"
              job="CEO My Hospital"
            />
          </div>
          <div className="w-4/12">
            <CardTestimonial
              title={`Logo F&B Corp`}
              description="Really the best service we've ever gotten, really looking forward to the next project"
              image={`/avatar-review-2.png`}
              nama="John Robert"
              job="CEO My Hospital"
            />
          </div>
          <div className="w-4/12">
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
