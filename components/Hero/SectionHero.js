import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import HeroItem from "./HeroItem";

export default function SectionHero() {
  return (
    <>
      <section id="hero">
        <Container>
          <div className="mt-[100px] pb-[343px] text-center w-10/12 mx-auto text-white">
            <h1 className="font-bold text-[64px]">
              Create Amazing Digital Product For Your Business
            </h1>
            <p className="text-lg leading-[27px] w-10/12 mx-auto mt-8 mb-12">
              We are a professional digital agency that has been established
              since 2016, we present a variety of digital services that can help
              you solve problems in your business
            </p>
            <Button>Get Started</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
