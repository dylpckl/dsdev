import img1 from "../../../public/images/Batch Creation Form.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="">
        <h1 className="text-6xl text-center">Tenant Payment Form</h1>

        <Image
          src={img1}
          alt="image"
        />
      </section>

      <section className="relative bg-pink-300 w-full h-12">
        <div
          id="sticky-container"
          className="sticky top-20 w-full"
        >
          <span
            id="sticky-element"
            className="sticky top-12 font-mono tracking-widest text-[100px] -z-10 text-slate-300/10"
            style={{ writingMode: "vertical-lr" }}
          >
            OVERVIEW\\
          </span>
        </div>
      </section>



      <section className="bg-pink-300 w-full h-12">


      </section>


      
      <section className="bg-pink-300 w-full h-12">


      </section>
    </div>
  );
}
