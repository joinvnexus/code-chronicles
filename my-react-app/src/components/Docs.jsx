import React, { useState } from "react"

export default function Docs() {
  const [links, setLinks] = useState([
    { id: 1, name: "MDN Docs", url: "https://developer.mozilla.org" },
    { id: 2, name: "Stack Overflow", url: "https://stackoverflow.com" },
    { id: 3, name: "GitHub Docs", url: "https://docs.github.com" },
    { id: 4, name: "ChatGPT", url: "https://chat.openai.com" },
  ])

  const [newLink, setNewLink] = useState({ name: "", url: "" })

  const addLink = () => {
    if (!newLink.name.trim() || !newLink.url.trim()) return
    setLinks([...links, { id: Date.now(), ...newLink }])
    setNewLink({ name: "", url: "" })
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">📚 Docs & Bookmarks</h2>

      {/* Add new link */}
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Link Name"
          value={newLink.name}
          onChange={e => setNewLink({ ...newLink, name: e.target.value })}
          className="flex-1 p-2 border rounded bg-gray-50 dark:bg-gray-900"
        />
        <input
          type="text"
          placeholder="URL"
          value={newLink.url}
          onChange={e => setNewLink({ ...newLink, url: e.target.value })}
          className="flex-1 p-2 border rounded bg-gray-50 dark:bg-gray-900"
        />
        <button
          onClick={addLink}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Links list */}
      <div className="grid md:grid-cols-2 gap-3">
        {links.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <div className="font-bold">{link.name}</div>
            <div className="text-xs opacity-70">{link.url}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
