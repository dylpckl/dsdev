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
  badge?: boolean;
};

const Badge = () => {
  return (
    <span className="inline-flex w-fit items-center uppercase rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-400/60">
      coming soon
    </span>
  );
};

const Card = ({
  className,
  children,
  title,
  icon,
  divider,
  badge,
}: CardProps) => {
  return (
    <div
      className={cn(
        "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
        className
      )}
    >
      {title ? (
        <div className="flex gap-4 w-full items-center text-teal-300">
          {icon && icon}
          <span className="font-mono font-semibold uppercase tracking-widest">
            {title}
          </span>
          {badge && <Badge />}
          {divider && <hr className="grow h-px border-0 bg-teal-300" />}
        </div>
      ) : null}
      {/* If title exists, add mt-6 to children */}
      <div className={cn({ "mt-6": title })}>{children}</div>
    </div>
  );
};

export default Card;
