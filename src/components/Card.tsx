// Utils
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;


// <Card
//                 key={index}
//                 className="flex flex-col gap-4"
//               >
//                 <div className="flex gap-4 w-full items-center text-teal-300 tracking-wide">
//                   <Icon className="w-5 h-5" />
//                   <span className="font-mono font-semibold uppercase">
//                     {title}
//                   </span>
//                   {/* <hr className="grow h-px border-0 bg-teal-300" /> */}
//                 </div>

//                 {content}
//               </Card>