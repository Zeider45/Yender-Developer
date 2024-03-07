import Folder from "../icons/Folder";
import ProjectItem from "./ProjectItem";

export interface links {
  from: string;
  link: string;
}

export interface Project {
  id: number;
  date: string;
  title: string;
  icon: string;
  description: string;
  learned: string;
  images: string[];
  links: links[];
  tecnologies: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    date: "January 2024",
    title: "HiGuy",
    icon: "HiGuyLogo.svg",
    description:
      " Simple chat application that can be used to communicate people with each other. The application is able to send and receive text messages, as well as share audio and image messages in realtime. People can sign up by google or credentials",
    learned: "/",
    images: ["/chat-mockup-1.png", "/chat-mockup-2.jpg", "/chat-mockup-3.png"],
    links: [
      { from: "github", link: "https://github.com/Yennic0302/HiGuy/tree/main" },
      { from: "page", link: "https://hi-guy.vercel.app/" },
    ],
    tecnologies: [
      "typescript",
      "nextjs",
      "redux",
      "tailwind",
      "nodejs",
      "express",
      "socketio",
      "prisma",
    ],
  },

  {
    id: 2,
    date: "Febrero 2022",
    icon: "meta.svg",

    title: "Memory",
    description:
      "This memory game, where you can challenge yourself to remember the cards when you discover it.",
    learned: "",
    images: ["/memory-mockup-1.jpg", "/memory-mockup-2.jpg"],
    links: [
      { from: "github", link: "https://github.com/Yennic0302/memory-app" },
      { from: "page", link: "https://memory-app-six.vercel.app/" },
    ],
    tecnologies: ["react"],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col projects-container">
      <h2 className="text-2xl mb-6 md:mb-0  font-semibold flex items-center justify-start ml-12 gap-x-3 shadow-3d">
        <Folder style="size-8" />
        Projects created
      </h2>
      <article className="flex flex-col w-full overflow-auto px-6 gap-y-6 md:gap-y-0 lg:max-h-[600px] snap-y snap-mandatory z-10 ">
        {PROJECTS.map((project: any) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </article>
    </section>
  );
}
