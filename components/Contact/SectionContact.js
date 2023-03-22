import Button from "../Button";
import Container from "../Container";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="xl:py-[60px] py-[40px] w-screen bg-green bg-contact"
    >
      <Container>
        <div className="mx-auto text-center text-white xl:w-8/12 xl:px-14">
          <h1 className="xl:text-5xl text-4xl font-bold xl:leading-[65px] leading-[50px]">
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
