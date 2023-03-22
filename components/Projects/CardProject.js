import Image from "next/image";

export default function CardProject({ image, title, description }) {
  return (
    <div>
      <Image width="360" height="215" src={image} alt="" className="" />
      <h4 className="mt-4 mb-2 text-xl font-semibold">{title}</h4>
      <p className="text-lg  opacity-70">{description}</p>
    </div>
  );
}
