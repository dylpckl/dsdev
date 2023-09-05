import BackButton from "@/components/BackButton";
import img1 from "../../../public/images/Batch Creation Form.png";
import Image from "next/image";
import VerticalText from "@/components/VerticalText";

const OVERVIEW = [
  {
    headline: "headline",
    body: "We were tasked with a comprehensive overhaul of an advanced telemetry and cloudbased remote pump monitoring and control system for a global water technology provider",
  },
  {
    headline: "headline",
    body: "We were tasked with a comprehensive overhaul of an advanced telemetry and cloudbased remote pump monitoring and control system for a global water technology provider",
  },
  {
    headline: "headline",
    body: "We were tasked with a comprehensive overhaul of an advanced telemetry and cloudbased remote pump monitoring and control system for a global water technology provider",
  },
  {
    headline: "headline",
    body: "We were tasked with a comprehensive overhaul of an advanced telemetry and cloudbased remote pump monitoring and control system for a global water technology provider",
  },
];

const OverviewCard = ({ content }) => {
  return (
    <div className="col-span-6">
      <h2 className=" text-3xl font-semibold mb-6">{content.headline}</h2>
      <p className="text-lg">{content.body}</p>
    </div>
  );
};

export default function Page() {
  return (
    <article className="flex flex-col font-sans dark:text-zinc-100 px-4">
      {/* <BackButtonon /> */}
      {/* Hero */}
      <section className="p-12">
        <h1 className="text-7xl font-bold tracking-tight capitalize">
          whatever the f this is named
        </h1>
        <h2 className="mt-12">
          Redesigning the experience of entering tenant payments into accounting
          software
        </h2>
        <Image
          src={img1}
          alt="image"
        />
      </section>

      {/* Overview */}
      <section className="flex relative w-full mt-24">
        {/* <div
          id="sticky-container"
          className="sticky top-20 text-center"
        >
          <span
            id="sticky-element"
            className="sticky top-12 font-mono tracking-widest text-5xl -z-10 text-slate-300/10"
            style={{ writingMode: "vertical-lr" }}
          >
            OVERVIEW\\
          </span>
        </div> */}
        <VerticalText text="overview" />

        <div className="grid grid-cols-12 mx-16 gap-10 auto-rows-min w-full">
          {/* {OVERVIEW.map((overview, overviewIndex) => (
            <OverviewCard content={overview} />
          ))} */}

          <div className="col-span-9">
            <span className="text-2xl text-teal-300 font-semibold">
              About the project
            </span>
            <p className="text-lg mt-6">
              A payment processing tool for property managers that simplifies
              rent collection, offers various payment options, and streamlines
              record-keeping for a seamless tenant payment experience.
            </p>
            <p className="text-lg mt-6">
              A payment processing tool for property managers that simplifies
              rent collection, offers various payment options, and streamlines
              record-keeping for a seamless tenant payment experience.
            </p>
          </div>

          <div className="col-span-3">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-lg text-teal-300 font-semibold capitalize">
                  my role
                </span>
                <span>UX Research, UI Design, Prototyping</span>
              </li>
              <li className="flex flex-col">
                <span className="text-lg text-teal-300 font-semibold">
                  Tools
                </span>
                <span>Figma</span>
              </li>
              <li className="flex flex-col">
                <span className="text-lg text-teal-300 font-semibold capitalize">
                  project length
                </span>
                <span>3 weeks</span>
              </li>
              <li className="flex flex-col">
                <span className="text-lg text-teal-300 font-semibold capitalize">
                  year
                </span>
                <span>2023</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="flex relative w-full mt-24">
        {/* <div
          id="sticky-container"
          className="sticky top-20 text-center"
        >
          <span
            id="sticky-element"
            className="sticky top-12 font-mono tracking-widest text-5xl -z-10 text-slate-300/10"
            style={{ writingMode: "vertical-lr" }}
          >
            DISCOVERY\\
          </span>
        </div> */}
        <VerticalText text="discovery" />
        <div className="grid grid-cols-12 mx-16 gap-10 auto-rows-min w-full">
          <span className="text-2xl text-teal-300 font-semibold">
            About the project
          </span>
        </div>
      </section>
    </article>
  );
}
