import Image from "next/image";

export default function CardTestimonial({
  title,
  description,
  nama,
  job,
  image,
}) {
  return (
    <div className="p-6 border border-primary">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="mt-2 mb-[21px] text-lg opacity-70">{description}</p>
      <div className="flex items-center space-x-4">
        <Image
          width="60"
          height="60"
          src={image}
          alt=""
          className="object-contain"
        />
        <div>
          <h4 className="text-lg font-semibold">{nama}</h4>
          <h4 className="text-lg font-semibold opacity-70">{job}</h4>
        </div>
      </div>
    </div>
  );
}
