import React, { useState } from "react"

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Setup project structure", status: "todo" },
    { id: 2, text: "Build Navbar", status: "in-progress" },
    { id: 3, text: "Add Snippets Manager", status: "done" },
  ])

  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, status: "todo" },
    ])
    setNewTask("")
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("taskId", id)
  }

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("taskId")
    setTasks(
      tasks.map(task =>
        task.id === parseInt(id) ? { ...task, status: newStatus } : task
      )
    )
  }

  const allowDrop = e => e.preventDefault()

  const columns = [
    { id: "todo", title: "📝 Todo" },
    { id: "in-progress", title: "⚡ In Progress" },
    { id: "done", title: "✅ Done" },
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">✅ Task Manager</h2>

      {/* Add new task */}
      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="New task..."
          className="flex-1 p-2 border rounded bg-gray-50 dark:bg-gray-900"
        />
        <button
          onClick={addTask}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(col => (
          <div
            key={col.id}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-[300px]"
            onDrop={e => handleDrop(e, col.id)}
            onDragOver={allowDrop}
          >
            <h3 className="font-bold mb-2">{col.title}</h3>
            <div className="space-y-2">
              {tasks
                .filter(task => task.status === col.id)
                .map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={e => handleDragStart(e, task.id)}
                    className="p-2 bg-white dark:bg-gray-700 border rounded shadow cursor-move"
                  >
                    {task.text}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
