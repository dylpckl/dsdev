- app/api/journal/route.ts
this gets files in /posts

- app/journal/page.jsx
default UI for www.dylansmith.dev/journal
server component that asynchronously fetches from /api/journal (route handler above)
renders JournalEntries, passing fetched posts as props

- app/journal/JournalEntries.tsx
client component that accepts the array of entries as a prop