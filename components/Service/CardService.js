export default function CardService({ logo, title, description }) {
  return (
    <div className="px-6 py-8 text-center bg-white shadow-service">
      <div className="flex justify-center">{logo}</div>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-lg opacity-70">{description}</p>
    </div>
  );
}
