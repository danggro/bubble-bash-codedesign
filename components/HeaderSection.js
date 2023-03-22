export default function HeaderSection({ section, main }) {
  return (
    <div>
      <h4 className="text-lg opacity-70">{section}</h4>
      <h2 className="mt-1 mb-10 text-4xl font-semibold">{main}</h2>
    </div>
  );
}
