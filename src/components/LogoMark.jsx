export default function LogoMark({ className = '' }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="32" fill="currentColor" opacity="0.14" />
      <circle
        cx="36"
        cy="36"
        r="29"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
      <path
        d="M35.8 18.2c4.1 4.8 6.3 8.2 6.3 11.5 0 3.8-2.9 6.9-6.5 6.9s-6.4-3-6.4-6.8c0-3.4 2.2-6.8 6.6-11.6Z"
        fill="currentColor"
      />
      <path
        d="M17.8 45.7c7.8-1.1 12.7-4.7 15.4-12.2 2.5 7.9 7.4 11.7 15.8 12.3-4.8 6.5-11.1 9.3-17.2 8.7-5.4-.6-10.2-3.9-14-8.8Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M21 41.8c4.7 3.8 9.2 4.7 14.2 2.5 4.9 2.4 9.5 1.6 14-2.3"
        fill="none"
        stroke="#f7f3ea"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
