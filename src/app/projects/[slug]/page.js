
import { getArticleFromSlug, getAllArticles } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/app/mdx-components';

// export const generateStaticParams = async () => {
//     const projects = getAllArticles();
//     return projects.map((project) => ({
//         slug: project.slug,
//     }));
// };

export async function generateMetadata({ params }) {
    const { slug } = params;
    const project = getArticleFromSlug(params);

    // return {
    //     title: blog.frontMatter.title,
    //     description: blog.frontMatter.description,
    // }
}

export default async function Project({ params }) {
    const { slug } = params;
    const project = await getArticleFromSlug(slug)
    console.log("HERE", project)
    const MDXContent = useMDXComponents(project.content)
    return (
        <article className='prose prose-slate dark:prose-invert prose-sm max-w-none'>
            <h1>{project.frontmatter.excerpt}</h1>
            {/* <MDXRemote source={project.content} /> */}
            <MDXContent />
        </article>
    )
}
