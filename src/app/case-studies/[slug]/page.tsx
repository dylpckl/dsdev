import { promises as fs } from "fs";

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/case_studies.json",
    "utf-8"
  );
  const caseStudies = JSON.parse(file);
  return caseStudies.map((caseStudy: { slug: string }) => ({
    params: { slug: caseStudy.slug },
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  //   const file = await fs.readFile(
  //     path.join(process.cwd() + "/src/app/case_studies.json"),
  //     "utf-8"
  //   );
  return <div>case study: {params.slug}</div>;
}
