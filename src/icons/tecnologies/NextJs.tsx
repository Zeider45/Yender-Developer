export default function NextJs({ style }: { style: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-brand-nextjs ${style}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
      <path d="M15 12v-3" />
    </svg>
  );
}
