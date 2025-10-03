import React from "react"

export default function Sidebar({ sidebarOpen, activeTab, setActiveTab }) {
  const categories = [
    { id: "snippets", label: "📂 Snippets" },
    { id: "notes", label: "📝 Notes" },
    { id: "tasks", label: "✅ Tasks" },
    { id: "apis", label: "🌍 APIs & Tools" },
    { id: "docs", label: "📚 Docs" },
    { id: "widgets", label: "📊 Widgets" },
    { id: "settings", label: "⚙️ Settings" },
  ]

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col border-r`}
    >
      <div className="flex items-center justify-between p-4">
        <span className={`${sidebarOpen ? "block" : "hidden"} font-semibold`}>
          Categories
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.label)}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-800 transition ${
              activeTab === cat.label ? "bg-gray-800 font-bold" : ""
            }`}
          >
            <span>{cat.label.split(" ")[0]}</span>
            {sidebarOpen && <span>{cat.label.slice(2)}</span>}
          </button>
        ))}
      </nav>

      {/* Font size control */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs mb-2 opacity-70">Font Size</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-gray-800 rounded">A-</button>
          <button className="px-2 py-1 bg-gray-800 rounded">A+</button>
        </div>
      </div>
    </aside>
  )
}
