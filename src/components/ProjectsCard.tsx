import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
  value: any;
  num: number
}
const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  const getTagStyles = (tag: string) => {
    const styles: { [key: string]: string } = {
      'Nextjs': 'bg-slate-950 text-white',
      'C#': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-500 text-white',
      'Java': 'bg-red-300 text-white',
      'Spring Boot': 'bg-emerald-300 text-white',
      '.NET Core Web API': 'bg-fuchsia-400 text-white',
      'MariaDB':'bg-violet-500 text-white',
      'H2 Database': 'bg-slate-600 text-white',
      'vercel': 'bg-slate-950 text-white',
      'tailwindcss': 'bg-cyan-400 text-white',

    };
    return styles[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
  <FramerWrapper className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"} y={0} scale={0.8} delay={num/4} duration={0.15}>
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{value.title}</CardTitle>
       
      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
      <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3">
        {
          value.tags.map((itm:string, indx:number) => {
            // return <Badge key={indx}>{itm}</Badge>
            return <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${getTagStyles(itm)}`} key={indx}>{itm}</span>
          })
        }
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }),"flex")}
        >
          Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
        </Link>
      </CardFooter>
    </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
