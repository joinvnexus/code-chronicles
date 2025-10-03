import React from "react"

export default function Settings({
  darkMode,
  setDarkMode,
  fontSize,
  setFontSize,
  exportData,
  importData
}) {

  const handleImport = e => {
    const file = e.target.files[0]
    if (!file) return
    importData(file)
    e.target.value = null // reset input
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">⚙️ Settings</h2>

      {/* Dark / Light Mode */}
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
          />
          Dark Mode
        </label>
      </div>

      {/* Font Size */}
      <div className="flex items-center gap-2">
        <span>Font Size:</span>
        <button
          onClick={() => setFontSize(s => Math.max(12, s - 1))}
          className="px-2 py-1 border rounded"
        >
          A-
        </button>
        <span>{fontSize}px</span>
        <button
          onClick={() => setFontSize(s => Math.min(20, s + 1))}
          className="px-2 py-1 border rounded"
        >
          A+
        </button>
      </div>

      {/* Export / Import */}
      <div className="flex gap-2 items-center">
        <button
          onClick={exportData}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Export JSON
        </button>
        <label className="px-3 py-1 border rounded cursor-pointer">
          Import
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />
        </label>
      </div>
    </div>
  )
}
