import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Project Portfolio",
      description:
        `A simple and Beautiful Porfolio made with Nextjs and Shadcn Ui.`,
      tags: ["Nextjs", "TypeScript", "tailwindcss"],
      link: "https://github.com/caesar-kaho/my-portfolio"
    },
    {
      title: "Nextjs Dashboard",
      description:
        `Dashboard with Nextjs`,
      tags: ["Nextjs", "TypeScript", "vercel"],
      link: "https://github.com/caesar-kaho/nextjs-dashboard"
    },
    {
      title: "E-commerce Backend ",
      description:
        `shopping mall with spring boot`,
      tags: ["Spring Boot", "Java", "H2 Database"],
      link: "https://github.com/caesar-kaho/springboot-mall"
    },
    {
      title: "Line chatbot",
      description:
        `using C# with .NET Core Web API`,
      tags: ["C#", ".NET Core Web API", "MariaDB"],
      link: "https://github.com/caesar-kaho/Linebot_API"
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
