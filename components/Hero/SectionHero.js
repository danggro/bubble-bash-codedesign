import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import HeroItem from "./HeroItem";

export default function SectionHero() {
  return (
    <>
      <section id="hero">
        <Container>
          <div className="xl:mt-[100px] mt-[65px] xl:pb-[343px] pb-[240px] text-center xl:w-10/12 mx-auto text-white">
            <h1 className="font-bold xl:text-[64px] text-[35px] leading-tight">
              Create Amazing Digital Product For Your Business
            </h1>
            <p className="xl:text-lg text-base leading-[27px] xl:w-10/12 mx-auto mt-8 mb-12">
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
