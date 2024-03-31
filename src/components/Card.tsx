// TODO
// accept icon, title, divider
// title is required for badge to work. is that good?
//

// Utils
import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";

import { Badge } from "./Badge";

type CommonProps = {
  children: ReactNode;
  className?: string;
  divider?: boolean;
  title?: string;
  icon?: ReactElement;
};

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
type BadgeProps =
  | { badge?: false; badgeColor?: never; badgeText?: never; uppercase?: never }
  | { badge: true; badgeColor: string; badgeText: string; uppercase: boolean };

// type CardWithBadgeProps = CommonProps & {
//   badge: boolean;
//   badgeColor?: string;
//   badgeText?: string;
// };

type CardProps = CommonProps & BadgeProps;

// type CardProps = {
//   children: ReactNode;
//   className?: string;
//   divider: boolean;
//   title?: string;
//   icon?: ReactElement;
//   badge?: boolean;
//   badgeColor?: string;
//   badgeText?: string;
// };

export const Card = (props: CardProps) => {
  const {
    children,
    className,
    divider,
    title,
    icon,
    badge,
    badgeColor,
    badgeText,
  } = props;

  return (
    <div
      className={cn(
        "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
        className
      )}
    >
      {title ? (
        <div className="flex gap-4 w-full items-center text-teal-300 mb-4">
          {icon && icon}
          <span className="font-mono font-semibold uppercase tracking-widest">
            {title}
          </span>
          {badge ? (
            <Badge
              color={badgeColor}
              text={badgeText}
              uppercase={true}
            />
          ) : null}
          {divider ? <hr className="grow h-px border-0 bg-teal-300" /> : null}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export type { CardProps };
