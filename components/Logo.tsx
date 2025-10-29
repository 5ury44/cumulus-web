export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Cloud Icon */}
      <svg
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C23.5483 10 23.1258 10.0878 22.7439 10.2465C21.9398 8.2159 20.0236 6.75 17.8333 6.75C15.1834 6.75 13.0333 8.90011 13.0333 11.55C13.0333 11.5714 13.0337 11.5928 13.0342 11.6141C11.6631 12.0215 10.6667 13.2744 10.6667 14.75C10.6667 16.5449 12.1218 18 13.9167 18H24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <span className="text-xl md:text-2xl font-light text-white">Cumulus</span>
    </div>
  );
}
