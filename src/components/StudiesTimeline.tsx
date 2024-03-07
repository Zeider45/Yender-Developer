import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import RevealCard from "./RevealCard";
import "./Timeline.css";

export default function StudiesTimeline() {
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
            <h2>Web Developing</h2>
            <small>2022 - present</small>
            <p>
              I started to learn web developing and programming fundaments by my
              own, using plataforms like YouTube Where i watched many good
              programmers from many parts of the world. I read many posts and
              documentation, and also used other resources such udemy or free
              courses of Free Code Camp.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
      <div className="container right-container">
        <div className="size-6 rounded-full bg-gray-300 mark"></div>
        <RevealCard styleType="right">
          <div className="text-box">
            <h2>Unexca - Informatics Engineering</h2>
            <small>2022 - Present</small>
            <p>
              I started the university at UNEXCA, where i am learning about
              Network Infrastructure, Data Bases, Project Management, Software
              Arquitecture, Logical Mathematics, Critical Thinking, Algorithmics
              and Programming.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
      <div className="container left-container">
        <div className="size-6 rounded-full bg-gray-300 mark"></div>
        <RevealCard styleType="left">
          <div className="text-box">
            <h2>Instituto Oxford Bilingue</h2>
            <small>2023 - Present</small>
            <p>
              Studing english as a foreign language, improving my skills in the
              language by speaking and interacting with my classmates, currently
              learning the intermidiate level.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </RevealCard>
      </div>
    </div>
  );
}
