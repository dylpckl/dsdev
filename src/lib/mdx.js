import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

const articlesPath = path.join(process.cwd(), 'src/content')

// Read the mdx files
export async function getSlug() {
    const paths = sync(`${projectsPath}/.mdx`)
    return paths.map((path) => {
        const pathContent = path.split('/')
        const fileName = pathContent[pathContent.length - 1]
        const [slug, _extension] = fileName.split('.')
        return slug
    })
}

// Parse article content
export async function getArticleFromSlug(slug) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`)
    const source = fs.readFileSync(articleDir)
    const { content, data } = matter(source)

    return {
        content,
        frontmatter: {
            slug,
            excerpt: data.excerpt,
            title: data.title,
            publishedAt: data.publishedAt,
            readingTime: readingTime(source).text,
            ...data,
        },
    }
}

export async function getAllArticles() {
    const articles = fs.readdirSync(path.join(process.cwd(), 'src/content'))

    return articles.reduce((allArticles, articleSlug) => {
        // get parsed data from mdx files in the "content" dir
        const source = fs.readFileSync(
            path.join(process.cwd(), 'src/content', articleSlug),
            'utf-8'
        )
        const { data } = matter(source)

        return [
            {
                ...data,
                slug: articleSlug.replace('.mdx', ''),
                readingTime: readingTime(source).text,
            },
            ...allArticles,
        ]
    }, [])
}