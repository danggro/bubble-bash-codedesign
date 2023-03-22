export default function HeroItem({ main, submain }) {
  return (
    <div className="text-center">
      <h2 className="font-semibold xl:text-[32px] text-[28px]">{main}</h2>
      <h4 className="px-8 text-base xl:mt-2 xl:px-0 xl:text-lg">{submain}</h4>
    </div>
  );
}
