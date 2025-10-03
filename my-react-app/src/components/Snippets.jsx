import React, { useState } from "react";

const sampleSnippets = [
  {
    id: 1,
    title: "Hello World (JS)",
    lang: "javascript",
    code: `console.log("Hello World");`,
    tags: ["js", "beginner"],
  },
  {
    id: 2,
    title: "Vue Component",
    lang: "vue",
    code: `<template>
  <div>Hello Vue</div>
</template>

<script>
export default {
  name: "HelloVue"
}
</script>`,
    tags: ["vue", "component"],
  },
  {
    id: 3,
    title: "React useState Hook",
    lang: "react",
    code: `import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count+1)}>
      Count: {count}
    </button>
  );
}`,
    tags: ["react", "hooks"],
  },
];

export default function Snippets() {
  const [search, setSearch] = useState("");

  const filtered = sampleSnippets.filter(
    (snip) =>
      snip.title.toLowerCase().includes(search.toLowerCase()) ||
      snip.tags.some((tag) => tag.includes(search.toLowerCase()))
  );

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard ✅");
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">📂 Code Snippets</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search snippets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-800"
      />

      {/* Snippets list */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((snip) => (
          <div
            key={snip.id}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">{snip.title}</h3>
              <button
                onClick={() => copyToClipboard(snip.code)}
                className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300"
              >
                Copy
              </button>
            </div>

            <pre className="overflow-x-auto bg-black text-green-400 p-3 rounded text-sm">
              <code>{snip.code}</code>
            </pre>

            <div className="mt-2 flex flex-wrap gap-2">
              {snip.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500">No snippets found 🔍</p>
        )}
      </div>
    </div>
  );
}
