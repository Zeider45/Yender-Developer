import { useState } from "react";
import { createPortal } from "react-dom";
import Arrow from "../icons/Arrow";
import AboutDetailed from "./AboutDetailed";

export default function About() {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  return (
    <>
      {showAbout &&
        createPortal(
          <AboutDetailed setShowAbout={setShowAbout} />,
          document.getElementById("modal") as HTMLElement
        )}
      <button
        onClick={() => setShowAbout(true)}
        className="px-4 py-2 text-lg rounded-lg text-[--card-text] w-max bg-[--main-text] hover:scale-110 hover:bg-[--secondary-text] transition-all about_btn"
      >
        <h3>See more about me</h3>
        <nav className=" flex w-full justify-end arrow transition-all ">
          <Arrow />
        </nav>
      </button>
    </>
  );
}
