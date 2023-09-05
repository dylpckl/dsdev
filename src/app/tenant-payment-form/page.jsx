import BackButton from "@/components/BackButton";
import img1 from "../../../public/images/Batch Creation Form.png";
import Image from "next/image";
import VerticalText from "@/components/VerticalText";
import legacy from "../../../public/images/image 4.png";

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

const DividerWithText = ({ text }) => {
  {
    /* https://flowbite.com/docs/typography/hr/ */
  }
  return (
    <div class="flex items-center w-full">
      <span class="pr-3 shrink-0 text-md text-slate-300 font-semibold uppercase tracking-widest">
        {text}
      </span>
      <hr class="grow h-px my-8 bg-teal-500 border-0" />
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
          accept Tenant Deposit by Monthly Billing
        </h1>
        <h2 className="mt-8 text-2xl">
          Redesigning the experience of entering tenant payments into property
          management software.
        </h2>
        <Image
          src={img1}
          alt="image"
          className="rounded-lg mt-12"
        />
      </section>

      {/* Overview */}
      <section className="flex relative w-full mt-24">
        <VerticalText text="overview" />

        <div className="grid grid-cols-12 mx-16 gap-10 auto-rows-min w-full">
          {/* {OVERVIEW.map((overview, overviewIndex) => (
            <OverviewCard content={overview} />
          ))} */}

          <div className="col-span-9">
            <span className="text-4xl text-teal-300 font-semibold">
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
      <section className="flex relative w-full mt-48">
        <VerticalText text="discovery" />
        <div className="mx-16 flex flex-col gap-5 auto-rows-min w-full">
          <h1 className="col-span-12 text-4xl text-teal-300 font-semibold capitalize">
            The challenge
          </h1>
          <p className="col-span-12 text-lg mt-6">
            A payment processing tool for property managers that simplifies rent
            collection, offers various payment options, and streamlines
            record-keeping for a seamless tenant payment experience.
          </p>
          <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            Design Goals
          </h2>
          <ol className="col-span-12 list-decimal ml-6">
            <li>achieve parity</li>
            <li>
              improve user experience
              <ul className="list-disc ml-6">
                <li>make form more digestible</li>
                <li>
                  add information and instructions that guide the user through
                  the form
                </li>
              </ul>
            </li>
          </ol>

          <Image
            src={legacy}
            alt="legacy version"
            height={500}
            width={500}
          />
        </div>
      </section>

      {/* Solution */}
      <section className="flex relative w-full mt-48">
        <VerticalText text="solution" />
        <div className="mx-16 flex flex-col gap-5 auto-rows-min w-full">
          <h1 className="col-span-12 text-4xl text-teal-300 font-semibold capitalize">
            my design process
          </h1>
          <p className="col-span-12 text-lg mt-6">
            A payment processing tool for property managers that simplifies rent
            collection, offers various payment options, and streamlines
            record-keeping for a seamless tenant payment experience.
          </p>

          {/* <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            Design Goals
          </h2> */}
          <DividerWithText text="design goals" />

          <ol className="col-span-12 list-decimal ml-6">
            <li>achieve parity</li>
            <li>
              improve user experience
              <ul className="list-disc ml-6">
                <li>make form more digestible</li>
                <li>
                  add information and instructions that guide the user through
                  the form
                </li>
              </ul>
            </li>
          </ol>

          <DividerWithText text="research" />

          <DividerWithText text="sketches" />
          <div className="flex">
            <div className="w-1/2">
              <span className="text-lg text-teal-300 font-semibold capitalize">
                title
              </span>
              <p>paragraph</p>
            </div>

            <Image
              src={legacy}
              alt="legacy"
              className="w-1/2"
            />
          </div>

          <DividerWithText text="wireframe" />
        </div>
      </section>

      {/* Final Design */}
      <section className="flex relative w-full mt-48">
        <VerticalText text="wrap up" />
        <div className="mx-16 flex flex-col gap-5 auto-rows-min w-full">
          <h1 className="col-span-12 text-4xl text-teal-300 font-semibold capitalize">
            the final design
          </h1>
          <p className="col-span-12 text-lg mt-6">
            A payment processing tool for property managers that simplifies rent
            collection, offers various payment options, and streamlines
            record-keeping for a seamless tenant payment experience.
          </p>
          <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            the final design
          </h2>
          <ol className="col-span-12 list-decimal ml-6">
            <li>achieve parity</li>
            <li>
              improve user experience
              <ul className="list-disc ml-6">
                <li>make form more digestible</li>
                <li>
                  add information and instructions that guide the user through
                  the form
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            learnings
          </h2>

          <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            sketches
          </h2>

          <h2 className="col-span-12 text-md text-slate-300 font-semibold uppercase tracking-widest">
            wireframe
          </h2>
        </div>
      </section>
    </article>
  );
}
