import Link from "next/link"

function page() {
    return (
        <ul>


            <li>

                <Link
                    href={`/projects/${post.slug}`}
                    className=""
                />
            </li>
        </ul>
    )
}

export default page