import React, { useState, useEffect, useRef } from "react"

export default function Widgets() {
  const [timeNow, setTimeNow] = useState(new Date())
  const [pomodoro, setPomodoro] = useState({ running: false, seconds: 25 * 60 })
  const pomInterval = useRef(null)

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTimeNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Pomodoro effect
  useEffect(() => {
    if (pomodoro.running) {
      pomInterval.current = setInterval(() => {
        setPomodoro(p => {
          if (p.seconds <= 1) {
            clearInterval(pomInterval.current)
            return { ...p, running: false }
          }
          return { ...p, seconds: p.seconds - 1 }
        })
      }, 1000)
    } else {
      clearInterval(pomInterval.current)
    }
    return () => clearInterval(pomInterval.current)
  }, [pomodoro.running])

  const togglePom = () => setPomodoro(p => ({ ...p, running: !p.running }))
  const resetPom = () => setPomodoro({ running: false, seconds: 25 * 60 })

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-4 p-4">
      {/* Clock */}
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow">
        <div className="text-xs opacity-60">Current Time</div>
        <div className="text-xl font-bold">{timeNow.toLocaleTimeString()}</div>
        <div className="text-sm opacity-70">{timeNow.toLocaleDateString()}</div>
      </div>

      {/* Pomodoro */}
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow">
        <div className="text-xs opacity-60">Pomodoro Timer</div>
        <div className="text-xl font-bold">{formatTime(pomodoro.seconds)}</div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={togglePom}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {pomodoro.running ? "Pause" : "Start"}
          </button>
          <button
            onClick={resetPom}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Weather placeholder */}
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow">
        <div className="font-semibold">🌤 Weather</div>
        <div className="text-sm opacity-70 mt-1">
          Placeholder: Integrate real API like OpenWeatherMap
        </div>
      </div>

      {/* GitHub Contribution Graph placeholder */}
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow">
        <div className="font-semibold">🐙 GitHub Contributions</div>
        <div className="text-sm opacity-70 mt-1">
          Placeholder: Integrate GitHub Graph API / React Graph lib
        </div>
      </div>
    </div>
  )
}
