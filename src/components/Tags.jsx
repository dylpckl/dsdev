export default function TagGroup({ tags }) {
  console.log(tags);
  return (
    <ul className="flex flex-wrap gap-2">
      {tags &&
        tags.map((tag) => (
          <li
            key={tag}
            className=""
          >
            <span className="rounded-full px-3 py-1 bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
              {tag}
            </span>
          </li>
        ))}
    </ul>
  );
}
