import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RevealCard from "./RevealCard";
import "./Timeline.css";

export default function ExpirienceTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      containerRef!.current!.classList.add("grow");
    }
  }, [isInView]);
  return (
    <div ref={containerRef} className="timeline">
      <div className="container left-container">
        <div className="size-6 rounded-full bg-gray-300 mark"></div>
        <RevealCard styleType="left">
          <div className="text-box">
            <h2>Banco Bicentenario - Especialista I</h2>
            <small>2021 - 2023</small>
            <p>
              I managed user data based on bank operations, including analyzing
              data to identify the issues, in which i used my programming skills
              to identify the issues and speed up the process.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
      <div className="container right-container">
        <div className="size-6 rounded-full bg-gray-300 mark"></div>
        <RevealCard styleType="right">
          <div className="text-box">
            <h2>UNEXCA - Student</h2>
            <small>2023</small>
            <p>
              I developed with some classmate a page for the university UNEXCA
              where we can read some posts about free software.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`underline text-lg font-normal text-blue-600 hover:text-blue-800 visited:text-purple-600 focus:outline-none focus:shadow-outline-blue`}
                href="https://github.com/Yennic0302/Sociotech"
              >
                Code
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`underline text-lg font-normal text-blue-600 hover:text-blue-800 visited:text-purple-600 focus:outline-none focus:shadow-outline-blue`}
                href="https://sociotech.vercel.app/"
              >
                Visit
              </a>
            </div>

            <span className="right-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
      <div className="container left-container">
        <div className="size-6 rounded-full bg-gray-300 mark"></div>
        <RevealCard styleType="left">
          <div className="text-box">
            <h2>UNEXCA - Student</h2>
            <small>2023</small>
            <p>
              Creation of a student administration project for my programming
              class, developed in C++ displayed in a console where we can add
              students, subjects and scores, all data saved in binary files.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`underline text-lg font-normal text-blue-600 hover:text-blue-800 visited:text-purple-600 focus:outline-none focus:shadow-outline-blue`}
              href="https://github.com/Yennic0302/AdministradorDeAlumnos"
            >
              Code
            </a>

            <span className="left-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
    </div>
  );
}
