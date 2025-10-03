import React, { useState } from "react"
 import { marked } from "marked"

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState("")
  const [setPinned] = useState(null)//pinned, 

  const addNote = () => {
    if (!input.trim()) return
    const newNote = {
      id: Date.now(),
      text: input,
      pinned: false,
    }
    setNotes([newNote, ...notes])
    setInput("")
  }

  const togglePin = id => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    )
    setPinned(id)
  }

  const exportMarkdown = text => {
    const blob = new Blob([text], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "note.md"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">📝 Notes & Ideas</h2>

      {/* Input area */}
      <textarea
        rows="5"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Write your markdown note here..."
        className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-900"
      />

      <div className="flex gap-3">
        <button
          onClick={addNote}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Save Note
        </button>
      </div>

      {/* Notes list */}
      <div className="grid md:grid-cols-2 gap-4">
        {notes.map(note => (
          <div
            key={note.id}
            className={`p-3 rounded-lg border shadow bg-white dark:bg-gray-800 relative`}
          >
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() => togglePin(note.id)}
                className={`px-2 py-1 text-xs rounded ${
                  note.pinned
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {note.pinned ? "📌 Pinned" : "Pin"}
              </button>
              <button
                onClick={() => exportMarkdown(note.text)}
                className="px-2 py-1 text-xs bg-green-500 text-white rounded"
              >
                Export
              </button>
            </div>

            {/* Markdown preview */}
            <div
              className="prose dark:prose-invert max-w-none text-sm"
              dangerouslySetInnerHTML={{ __html: marked(note.text) }}
            ></div>
          </div>
        ))}

        {notes.length === 0 && (
          <p className="text-gray-500">No notes yet ✍️</p>
        )}
      </div>
    </div>
  )
}
