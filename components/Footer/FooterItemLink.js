export default function FooterItemLink({ children, href }) {
  return (
    <>
      <li className="mt-4">
        <a href={href} className="text-lg hover:underline opacity-70">
          {children}
        </a>
      </li>
    </>
  );
}
