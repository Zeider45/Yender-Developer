import React, { type Dispatch, type SetStateAction } from "react";
import SocialPill from "../components/SocialPill";
import Close from "../icons/Close.tsx";
import GitHub from "../icons/GitHub.tsx";
import Window from "../icons/Window.tsx";
import Css from "../icons/tecnologies/Css.tsx";
import Express from "../icons/tecnologies/Express.tsx";
import NextJs from "../icons/tecnologies/NextJs.tsx";
import Nodejs from "../icons/tecnologies/Nodejs.tsx";
import Prisma from "../icons/tecnologies/Prisma.tsx";
import ReactIcon from "../icons/tecnologies/ReactIcon.tsx";
import Redux from "../icons/tecnologies/Redux.tsx";
import SocketIo from "../icons/tecnologies/SocketIo.tsx";
import Tailwind from "../icons/tecnologies/Tailwind.tsx";
import Typescript from "../icons/tecnologies/Typescript.tsx";
import type { Project } from "./Projects.tsx";
import SwipeCarousel from "./SwipeCarousel.tsx";

interface PropsProjectDetailed extends Project {
  setShowProject: Dispatch<SetStateAction<boolean>>;
}
export default function ProjectDetailed({
  title,
  icon,
  links,
  images,
  description,
  setShowProject,
  tecnologies,
  learned,
}: PropsProjectDetailed) {
  // const reactSwipeEl = useRef<ReactSwipe | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const header = document.querySelector(".header");

    if (e.currentTarget.scrollTop > 0) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="appear-modal fixed overflow-auto top-0 left-0  w-screen h-screen transition-all bg-[--modal-bg] backdrop-blur-md z-[100]"
    >
      <section className="flex relative flex-col text-[--card-text] w-full ">
        <nav className="w-full sticky top-0  flex justify-end p-2 px-6 sm:px-12 lg:px-24 z-50 transition-all header">
          <span onClick={() => setShowProject(false)}>
            <Close style="size-11 cursor-pointer hover:scale-[1.3] transition-all" />
          </span>
        </nav>
        <section className="flex  h-full items-center flex-wrap px-2 py-6 md:py-0 sm:px-12 lg:px-24 w-full  justify-around gap-8">
          <article className="flex flex-col  justify-center gap-y-4 flex-[1.2] sm:min-w-[500px]">
            <div className="flex gap-4 items-end ml-4">
              <img
                className=" size-20 md:size-24 cover bg-white p-[0.5rem] rounded-lg"
                src={icon}
                alt="project logo"
              />
              <h1 className="font-bold text-[--card-text] text-4xl md:text-6xl">
                {title}
              </h1>
            </div>
            <nav className="flex p-4 items-center gap-x-4">
              {links.length > 0 &&
                links.map(({ link, from }) => (
                  <SocialPill key={from} style="main" href={link}>
                    {from === "github" && (
                      <>
                        <GitHub style="size-6" /> Code
                      </>
                    )}
                    {from === "page" && (
                      <>
                        <Window style="size-6" /> Demo
                      </>
                    )}
                  </SocialPill>
                ))}
            </nav>
            <SwipeCarousel images={images} />
          </article>
          <article className="flex flex-col md:h-full pb-20 md:pb-0 gap-y-6 flex-1 sm:min-w-[500px]">
            <div className="min-h-40">
              <h2 className="text-2xl text-[--card-text] font-bold">
                Description
              </h2>
              <p className="text-[--card-semi-text]">{description}</p>
            </div>
            <div className="min-h-40">
              <h2 className="text-2xl text-[--card-text] font-bold">Learned</h2>
              <p className="text-[--card-semi-text]">{learned}</p>
            </div>
            <div className="min-h-20">
              <h2 className="text-2xl text-[--card-text] font-bold">Tools</h2>
              <div className="flex flex-wrap gap-3 py-6">
                {tecnologies.map((tec, index) => (
                  <div key={index}>
                    {tec == "nextjs" && <NextJs style="size-16" />}
                    {tec == "typescript" && <Typescript style="size-16" />}
                    {tec == "redux" && <Redux style="size-16" />}
                    {tec == "css" && <Css style="size-16" />}
                    {tec == "tailwind" && <Tailwind style="size-16" />}
                    {tec == "nodejs" && <Nodejs style="size-16" />}
                    {tec == "express" && <Express style="size-16" />}
                    {tec == "socketio" && <SocketIo style="size-16" />}
                    {tec == "prisma" && <Prisma style="size-16" />}
                    {tec == "react" && <ReactIcon style="size-16" />}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
