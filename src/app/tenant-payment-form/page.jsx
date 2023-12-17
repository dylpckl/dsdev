import BackButton from "@/components/BackButton";
import img1 from "../../../public/images/Batch Creation Form.png";
import Image from "next/image";
import VerticalText from "@/components/VerticalText";
import legacy from "../../../public/images/image 4.png";
import Callout from "@/components/Callout";
import DividerWithText from "@/components/DividerWithText";

import "./style.css";

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

    <div id="progress-bar" ></div>
    {/* <div id="progress-bar" className="fixed left-0 top-0 w-full h-0.5 origin-top-left animate-growProgress"></div> */}

      {/* Hero */}
      <section className="p-12">
        <h1 className="text-7xl font-bold tracking-tight capitalize">
          Select Tenants by Monthly Billing
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
              <a
                className="font-medium text-teal-300 hover:underline"
                href="briefly explain the feature in the legacy version"
                target="_blank"
              >
                SPIRE
              </a>{" "}
              is a web-based property management software tailored specifically
              for the NYC market. One key feature of the application (and major
              user task) is applying tenant payments to their open charges, the
              majority of which originate from monthly bills.
            </p>
            <p className="text-lg mt-6">
              This task can be completed by creating a batch of tenants
              manually, hand-selecting individual tenants to apply payments to.
              Alternatively, users can choose to have SPIRE select the tenants
              automatically for them by analyzing monthly bills.
            </p>
          </div>

          <div className="col-span-3">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-lg text-teal-300 font-semibold capitalize">
                  my role
                </span>
                <span>Full time UI/UX Designer on a team of 1.</span>
                <ul className="list-disc ml-6">
                  <li>UX Research</li>
                  <li>UI Design</li>
                  <li>Prototyping</li>
                </ul>
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
                <span>2 weeks</span>
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
          <p className="col-span-12 text-lg">
            The main goal of the project was to port this feature from the
            legacy software to the web application. As the sole UI & UX Designer
            on the project, I was tasked with updating the feature for the
            web-app as well as redesigning the experience to be easier to use.
          </p>

          <DividerWithText text="design goals" />
          <div className="flex">
            <div className="w-1/2">
              {/* <span className="text-lg text-teal-300 font-semibold capitalize">
                title
              </span>
              <p>paragraph</p> */}
              <ol className="list-decimal ml-6">
                <li className="text-lg font-semibold underline">
                  Achieve parity.
                </li>
                <ul className="list-disc mt-2">
                  <li>Port the feature from legacy to the web-app.</li>
                  <li>Keep all critical functionality intact.</li>
                </ul>
                <li className="text-lg font-semibold mt-6 underline">
                  Improve the user experience
                </li>
                <ul className="list-disc mt-2">
                  <li>Make the form more digestible.</li>
                  <li>
                    Add user instruction where possible to reduce decision
                    fatigue.
                  </li>
                  <li>
                    Guide the user through the form in a logical manner so that
                    it&apos;s clear which selections may inform or restrict
                    inputs later in the form.
                  </li>
                </ul>
              </ol>
            </div>

            <Image
              src={legacy}
              alt="legacy"
              className="w-1/2"
            />
          </div>
          <DividerWithText text="research" />
          <p className="col-span-12 text-lg">
            Given the extremely tight 2 week deadline, and being the lone
            designer on the project, I was unable to take the time to conduct
            any user research to uncover pain points or develop personas. This
            particular feature has been in use for decades, and over time has
            evolved quite a bit in accordance with user feedback. As such, my
            main focus during discovery was auditing the UI components at play
            and finding equivalents in use in the web-app, in addition to
            crafting new components as needed.
          </p>
          <DividerWithText text="UI Audit" />
          <p>image here with list of components in use</p>
          {/* <Image
            src={legacy}
            alt="legacy version"
            height={500}
            width={500}
          /> */}
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
            Flows,Wireframes,Prototypes,Testing,Iteration, andValidation. Again,
            you need to answer a few questions for every step you made: What did
            you want to achieve by doing this?How did this step contribute to
            the final design? 📃 Length: At least 3-5 sentences for every method
            you mention.
            <br /> This section is going to be the longest as it showcases how
            the project goals where achieved. Firstly, outline the design
            process steps and methods followed during the project outlines the
            layout of this section. Show your overall project steps, why you
            chose the methods you used, Recruiters want to see all the relevant
            design artifacts that you produced from sketches to visual mockups
            to prototypes. <br />- Structure. Because of the complexity of the
            form, I opted to use a full page structure instead of a modal, which
            I prefer to use sparingly for urgent user tasks. The extra space
            this affords means that I can utilize a two-column layout and
            display some extra instructions to the user. Organization. After
            re-arranging form fields according to hierarchy, related fields are
            grouped together into rows to make the form more digestable for the
            user. Updated Controls. Several controls on the legacy modal are
            patterns that we no longer use on the website and as such some new
            patterns were adopted for this form. A button that previously opened
            another nested modal for multi-record selection becomes a Combobox
            (autocomplete) that displays results as badges inside the input
            (super slick but I cant take credit for it) A radio group takes the
            form of a Segmented Control which saves vertical space and looks
            much more polished, professional and exciting. This is also an
            opportunity to add interesting hover states. User Instructions.
            Taking advantage of the extra real estate we gained by opting for a
            two-column layout, we can add some details under the form steps to
            provide some clarity to the user so they can make informed & correct
            choices as they progress through the form.
          </p>
          <p className="col-span-12 text-lg mt-6">
            What method/process were used to solve specific problem, user needs,
            business requirements and/or pain points? How did features address
            the objectives?
          </p>

          <DividerWithText text="research" />
          <p>what research did i do?</p>
          <Callout title="test callout">
            <p>testestsetestst</p>
          </Callout>

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

          <DividerWithText text="wireframes" />
          <DividerWithText text="components" />
          <DividerWithText text="screens" />
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
          <DividerWithText text="the final design" />
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

          <DividerWithText text="learnings" />

          <DividerWithText text="xx" />
        </div>
      </section>
    </article>
  );
}
