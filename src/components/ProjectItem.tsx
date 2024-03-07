import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Arrow from "../icons/Arrow";
import ProjectDetailed from "./ProjectDetailed";

export default function ProjectItem({ data }: { data: any }) {
  const [showProject, setShowProject] = useState<boolean>(false);
  useEffect(() => {
    if (showProject) {
      const body = document.body;
      if (showProject) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    return () => {
      const body = document.body;
      body.style.overflow = "auto";
    };
  }, [showProject]);

  return (
    <>
      {showProject &&
        createPortal(
          <ProjectDetailed {...data} setShowProject={setShowProject} />,
          document.getElementById("modal") as HTMLElement
        )}
      <div className="relative h-[300px] shrink-0 snap-start ">
        <div
          className="absolute top-0 left-0  w-full  card shadow-3d"
          onClick={() => setShowProject(!showProject)}
        >
          <div className="flex relative flex-col text-[--card-text] w-full h-full bg-[--main-text] rounded-sm overflow-hidden project-card cursor:pointer transition-all cursor-pointer">
            <img
              className="h-[205px] object-cover"
              src={data.images[0]}
              alt="app image"
            />
            <div className="flex py-2 px-2 gap-2 items-end">
              <img
                className="size-12 bg-white rounded-md p-[0.2rem]"
                src={data.icon}
              />
              <h2 className="font-bold relative top-[5px] text-4xl text-[--card-text]">
                {data.title}
              </h2>
            </div>
            <nav className="py-1 px-2 flex w-full justify-end arrow transition-all">
              <Arrow />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
