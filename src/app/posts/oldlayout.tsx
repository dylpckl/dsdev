export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body className="bg-slate-900 font-sans selection:bg-teal-300 selection:text-teal-900 h-screen overflow-hidden ">
        <div className="flex flex-col mx-auto min-h-screen px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="flex flex-col mx-auto w-full overflow-hidden grow rounded-lg h-full">
            <main className="font-sans grow h-[100px] bg-gradient-to-b from-[#6c6573]/80 to-transparent text-[#031739] p-8 flex-auto overflow-y-auto w-full rounded-lg">
              {children}
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
