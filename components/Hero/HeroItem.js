export default function HeroItem({ main, submain }) {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-[32px]">{main}</h2>
      <h4 className="mt-2 text-lg">{submain}</h4>
    </div>
  );
}
