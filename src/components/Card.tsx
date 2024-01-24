// TODO
// accept icon, title, divider
//
//

// Utils
import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  divider: boolean;
  title?: string;
  icon?: ReactElement;
};

const Card = ({ className, children, title, icon, divider }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
        className
      )}
    >
      {title && (
        <div className="flex gap-4 w-full items-center text-teal-300">
          {icon && icon}
          <span className="font-mono font-semibold uppercase tracking-widest">
            {title}
          </span>
          {divider && <hr className="grow h-px border-0 bg-teal-300" />}
        </div>
      )}
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default Card;
