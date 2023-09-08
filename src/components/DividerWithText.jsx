/* https://flowbite.com/docs/typography/hr/ */
const DividerWithText = ({ text }) => {
  return (
    <div class="flex items-center w-full">
      <span class="pr-3 shrink-0 text-md text-slate-300 font-semibold uppercase tracking-widest">
        {text}
      </span>
      <hr class="grow h-px my-8 bg-teal-500 border-0" />
    </div>
  );
};

export default DividerWithText;
