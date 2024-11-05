import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import js from 'public/frontend/js.png';
import ts from 'public/frontend/ts.png';
import springboot from 'public/backend/springboot.png';
import react from 'public/frontend/react.png';
import nextjs from 'public/frontend/nextjs.jpeg';
import java from 'public/backend/java.png';
import mybatis from 'public/backend/mybatis.png';
import mssql from 'public/backend/mssql.png';
import mongodb from 'public/backend/mongodb.png';
import git from 'public/tool/git.png';
import svn from 'public/tool/svn.png';
import html from 'public/frontend/html.png';
import css from 'public/frontend/css.png';
import github from 'public/tool/github.png';
import tailwind from 'public/frontend/tailwind.png';
import docker from 'public/tool/docker.png';
import vercel from 'public/tool/vercel.ico';
import nodejs from 'public/backend/nodejs.png';
import webpack from 'public/tool/webpack.png';
import graphql from 'public/tool/graphql.png';

import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {

    const frontend = [
        {alt:"nextjs", img:nextjs},
        {alt:"react", img:react},
        {alt:"ts", img:ts},
        {alt:"js", img:js},
        {alt:"tailwind", img:tailwind},
        {alt:"html", img:html},
        {alt:"css", img:css},
    ]

    const backend = [
        {alt:"java", img:java},
        {alt:"springboot", img:springboot},
        {alt:"nodejs", img:nodejs},
        {alt:"mybatis", img:mybatis},
        {alt:"mssql", img:mssql},
        {alt:"mongodb", img:mongodb},


    ]

    const tool = [
      {alt:"github", img:github},
      {alt:"git", img:git},
      {alt:"svn", img:svn},
      {alt:"vercel", img:vercel},
      {alt:"webpack", img:webpack},
      {alt:"docker", img:docker},
      {alt:"graphql", img:graphql}
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
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Frontend
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={frontend} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Backend
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={backend} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.34}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Tool
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
