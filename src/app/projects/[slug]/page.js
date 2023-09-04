import React from 'react'
import { getArticleFromSlug } from '@/lib/mdx';

const page = ({ params }) => {
    const { slug } = params;
    const project = getArticleFromSlug(slug)
    console.log(project)
    return (
        <div>page</div>
    )
}

export default page
