export default function Ntmlogo() {
  return (
    <svg viewBox="0 0 512 128" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="512" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6FD0B4" />
          <stop offset="55%" stopColor="#3BBD9C" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Apply to a group or individual paths */}
      <g fill="url(#logoGradient)">
        {/* your existing paths go here */}
      </g>
    </svg>
  );
}