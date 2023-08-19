async function getJournalEntries() {
  const res = await fetch("/api/journal", {
    method: "GET",
  });
  const posts = await res.json();
  console.log("POSTS", posts);
  return posts.posts;
}

export default async function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const journalEntries = await getJournalEntries();

  return (
    <div>
      {children}
    </div>
  );
}
