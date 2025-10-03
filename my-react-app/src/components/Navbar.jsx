import React from "react"

export default function Navbar({ setSidebarOpen, activeTab }) { //  sidebarOpen,
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-gray-900/50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(s => !s)}
            className="p-2 rounded-md hover:bg-gray-200/10"
          >
            ☰
          </button>
          <div className="font-semibold text-lg">Dream Dev Dashboard</div>
          <div className="ml-4 text-sm opacity-70">{activeTab}</div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="text-sm">{new Date().toLocaleString()}</div>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark")
            }}
            className="px-3 py-1 rounded-md border"
          >
            Toggle Theme
          </button>
          <div className="p-2 rounded-md border">👤 Projoy</div>
        </div>
      </div>
    </header>
  )
}
