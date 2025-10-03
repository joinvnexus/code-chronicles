import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Snippets from "./components/Snippets"
import Notes from "./components/Notes"
import Tasks from "./components/Tasks"
import Apis from "./components/Apis"
import Docs from "./components/Docs"
import Widgets from "./components/Widgets"
import Settings from "./components/Settings"



// পরে এখানে অন্যান্য components import করতে হবে যেমন Tasks, APIs, Docs ইত্যাদি

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("📂 Snippets")

  const renderContent = () => {
    switch (activeTab) {
      case "📂 Snippets":
        return <Snippets />
      case "📝 Notes":
        return <Notes />
      case "✅ Tasks":
        return <Tasks />
      case "🌍 APIs & Tools":
        return <Apis />
      case "📚 Docs":
        return <Docs />
      case "📊 Widgets":
        return <Widgets />
      case "⚙️ Settings":
        return <Settings />
      default:
        return <div className="p-4">Select a tab</div>
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  )
}

export default App
