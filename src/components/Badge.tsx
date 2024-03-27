import { cn } from "@/lib/utils";

type BadgeProps = {
  color?: string;
  text: string;
  uppercase: boolean;
};

export const Badge = ({ color, text, uppercase }: BadgeProps) => {
  let colorClasses;
  switch (color) {
    case "red":
      colorClasses = "bg-red-400/10 text-red-400 ring-red-400/20";
      break;
    case "yellow":
      colorClasses = "bg-yellow-400/10 text-yellow-500 ring-yellow-400/20";
      break;
    case "green":
      colorClasses = "bg-green-500/10 text-green-400 ring-green-500/20";
      break;
    case "blue":
      colorClasses = "bg-blue-400/10 text-blue-400 ring-blue-400/30";
      break;
    case "indigo":
      colorClasses = "bg-indigo-400/10 text-indigo-400 ring-indigo-400/30";
      break;
    case "purple":
      colorClasses = "bg-purple-400/10 text-purple-400 ring-purple-400/30";
      break;
    case "pink":
      colorClasses = "bg-pink-400/10 text-pink-400 ring-pink-400/20";
      break;
    default:
      colorClasses = "bg-gray-400/10 text-gray-400 ring-gray-400/20";
  }

  return (
    <span
      //   className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${className} ring-1 ring-inset`}
      className={cn(
        `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClasses} ring-1 ring-inset`,
        {
          uppercase: uppercase,
        }
      )}
    >
      {text}
    </span>
  );
};

// export type BadgeProps

{
  /* <div
      className={cn(
        "bg-slate-700/80 text-slate-100 backdrop-blur-sm w-full p-6 rounded-lg",
        className
      )}
    ></div> */
}

// className={cn(
//     "absolute flex items-center left-0 top-full text-xs font-mono font-normal w-full text-center border-l-2 text-red-300 border-l-red-300 border-r-2 border-r-red-300",
//     {
//       "top-full": edge === "bottom",
//       "-top-4": edge === "top",
//     }
//   )}
