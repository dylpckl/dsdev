const Callout = ({ title, children }) => {
  return (
    <div className="w-full flex flex-col relative group gap-2 border-l-4 border-teal-300 group transition-all hover:ring-2 ring-teal-300 rounded-lg p-4 text-slate-200 bg-slate-700/75">
      <span className="text-2xl">{title}</span>
      {children}
    </div>
  );
};

export default Callout;
