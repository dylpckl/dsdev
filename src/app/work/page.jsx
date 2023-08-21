export default function PostIndex() {
  return (
    <>
      <div className="flex flex-col">
        {/* Spire UI/UX */}
        <div>
          <h1 className="font-mono text-2xl">Spire UI</h1>
          <div className="bg-pink-300 h-[500px] w-full"></div>
        </div>

        {/* Projects */}
        <div className="mt-12">
          <h1 className="font-mono text-2xl">Projects</h1>
          <div className="grid grid-cols-2 gap-5 w-full ">
            <div className="col-span-1 bg-teal-300">steamparty</div>
            <div className="col-span-1 bg-teal-300">huberman-db</div>
            <div className="col-span-1 bg-teal-300">dsdev</div>
          </div>
        </div>
      </div>
    </>
  );
}
