import Button from "../Button";
import Container from "../Container";

export default function SectionContact() {
  return (
    <section id="contact" className="py-[60px] w-screen bg-green bg-contact">
      <Container>
        <div className="w-8/12 mx-auto text-center text-white px-14">
          <h1 className="text-5xl font-bold leading-[65px]">
            Have a project idea and want to make it come true?
          </h1>
          <p className="mt-4 mb-8 text-lg opacity-70">
            Please contact us and we will discuss about your project, don&apos;t
            forget we are always here for you
          </p>
          <Button>Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
