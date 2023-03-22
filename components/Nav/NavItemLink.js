export default function NavItemLink({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-xl hover:underline hover:underline-offset-2"
      >
        {children}
      </a>
    </li>
  );
}
