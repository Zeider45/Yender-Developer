const styles = {
  black:
    "bg-[--main-text] text-white hover:scale-[1.07]  hover:bg-[--secondary-text]",
  main: "bg-[--card-text]  text-[--main-text] hover:text-[--card-text] hover:scale-110 hover:bg-[--secondary-text]",
};

import React from "react";

export default function SocialPill({
  children,
  style,
  href,
}: {
  children: React.ReactNode;
  style: "black" | "main";
  href: string;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full 
    flex justify-center items-center gap-x-2
    py-2 px-4
    transition-all
    ${styles[style]}`}
      href={href}
    >
      {children}
    </a>
  );
}
