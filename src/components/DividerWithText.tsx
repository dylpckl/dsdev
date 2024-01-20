import { cn } from "@/lib/utils";

type DividerWithTextProps = {
  text: string;
  className?: string;
};

/* https://flowbite.com/docs/typography/hr/ */
const DividerWithText = ({ text, className }: DividerWithTextProps) => {
  return (
    <div className={cn("flex items-center w-full", className)}>
      <span className="pr-3 font-mono text-2xl text-teal-300 font-semibold uppercase">
        {text}
      </span>
      {/* <hr className="grow h-px my-8 border-0 bg-gradient-to-r from-teal-500 " /> */}
      <hr className="grow h-px my-8 border-0 bg-teal-300" />
    </div>
  );
};

export default DividerWithText;