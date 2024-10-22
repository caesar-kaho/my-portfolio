import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import js from '../../../public/language/js.png';
import ts from '../../../public/language/ts.png';
import springboot from '../../../public/framework/springboot.png';
import react from '../../../public/framework/react.png';
import nextjs from '../../../public/framework/nextjs.jpeg';
import java from '../../../public/language/java.png';
import mybatis from '../../../public/framework/mybatis.png';
import mssql from '../../../public/database/mssql.png';
import mongodb from '../../../public/database/mongodb.png';
import git from '../../../public/database/git.png';
import svn from '../../../public/database/svn.png';
import html from '../../../public/language/html.png';
import css from '../../../public/language/css.png';
import github from '../../../public/tool/github.png';
import tailwind from '../../../public/framework/tailwind.png';
import docker from '../../../public/tool/docker.png';
import vercel from '../../../public/tool/vercel.ico';
import nodejs from '../../../public/framework/nodejs.png';
import webpack from '../../../public/tool/webpack.png';

import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {

    const language = [
        {alt:"java", img:java},
        {alt:"js", img:js},
        {alt:"ts", img:ts},
        {alt:"html", img:html},
        {alt:"css", img:css},
    ]
    const framework = [
        {alt:"springboot", img:springboot},
        {alt:"react", img:react},
        {alt:"nextjs", img:nextjs},
        {alt:"nodejs", img:nodejs},
        {alt:"mybatis", img:mybatis},
        {alt:"tailwind", img:tailwind},

    ]
    const database = [
      {alt:"mssql", img:mssql},
      {alt:"mongodb", img:mongodb},
      {alt:"git", img:git},
      {alt:"svn", img:svn}
    ]
    const tool = [
      {alt:"github", img:github},
      {alt:"docker", img:docker},
      {alt:"vercel", img:vercel},
      {alt:"webpack", img:webpack},
    ]
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} >

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          Content
        </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Programming Languages
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Framework/Libraries
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.34}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Database/Version Control
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={database} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.34}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           DevOps/Tools
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={tool} />
        </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
