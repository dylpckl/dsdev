import { cn } from "@/lib/utils";

type DividerWithTextProps = {
  text: string;
  className?: string;
};

/* https://flowbite.com/docs/typography/hr/ */
const DividerWithText = ({ text, className }: DividerWithTextProps) => {
  return (
    <div className={cn("flex items-center w-full", className)}>
      <span className="pr-3 font-mono text-teal-300 font-semibold uppercase">
        {text}
      </span>
      <hr className="grow h-px my-8 border-0 bg-gradient-to-r from-teal-500 " />
    </div>
  );
};

export default DividerWithText;

// const Card = ({ className, children }: CardProps) => {
//   return (
//     <div
//       className={cn(
//         "bg-zinc-500/60 backdrop-blur-sm w-full p-6 rounded-xl",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };
