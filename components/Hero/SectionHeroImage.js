import Image from "next/image";
import Container from "../Container";
import HeroItem from "./HeroItem";

export default function SectionHeroImage() {
  return (
    <div className=" xl:-translate-y-[35%] -translate-y-[25%]  xl:-mb-[200px] -mb-[50px]">
      <Container>
        <Image width="1210" height="631" src="/hero.jpg" alt="" />
        <div className="flex flex-wrap items-center xl:justify-between xl:mt-[50px] mt-[30px] xl:w-10/12 xl:mx-auto -ml-2">
          <div className="flex items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0">
            <HeroItem main="1.2K+" submain="Happy Clients" />
          </div>
          <div className="flex items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0">
            <HeroItem main="1.1K+" submain="WorldWide Clients" />
          </div>
          <div className="flex items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0">
            <HeroItem main="6+" submain="Years of Experience" />
          </div>
          <div className="flex items-start justify-center w-6/12 mb-5 xl:block xl:w-auto xl:mb-0">
            <HeroItem main="12+" submain="Award Winners" />
          </div>
        </div>
      </Container>
    </div>
  );
}
