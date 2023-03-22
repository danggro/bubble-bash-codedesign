export default function Button({ children }) {
  return (
    <button className="border border-transparent hover:bg-green hover:border-white hover:text-white text-primary bg-white px-8 py-[23px] font-bold text-xl">
      <div className="flex items-center">
        {children}
        <span className="ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.75 12.5h16.5M13.5 5.75l6.75 6.75-6.75 6.75"
            ></path>
          </svg>
        </span>
      </div>
    </button>
  );
}
