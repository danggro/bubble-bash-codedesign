import Image from "next/image";
import Container from "../Container";
import HeroItem from "./HeroItem";

export default function () {
  return (
    <div className=" -translate-y-[35%] -mb-[200px]">
      <Container>
        <Image width="1210" height="631" src="/hero.jpg" alt="" />
        <div className="flex items-center justify-between mt-[50px]">
          <HeroItem main="1.2K+" submain="Happy Clients" />
          <HeroItem main="1.1K+" submain="WorldWide Clients" />
          <HeroItem main="6+" submain="Years of Experience" />
          <HeroItem main="12+" submain="Award Winners" />
        </div>
      </Container>
    </div>
  );
}
