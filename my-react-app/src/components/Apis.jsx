import React, { useState, useEffect } from "react";

export default function Apis() {
  const [apis, setApis] = useState([
    {
      id: 1,
      name: "JSON Placeholder",
      url: "https://jsonplaceholder.typicode.com/todos/1",
    },
  ]);
  const [newApi, setNewApi] = useState({ name: "", url: "" });
  const [response, setResponse] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedApis = localStorage.getItem("apis");
    if (savedApis) {
      setApis(JSON.parse(savedApis));
    } else {
      // default API if nothing saved
      setApis([
        {
          id: 1,
          name: "JSON Placeholder",
          url: "https://jsonplaceholder.typicode.com/todos/1",
        },
      ]);
    }
  }, []);

  // Save to localStorage whenever apis state changes
  useEffect(() => {
    localStorage.setItem("apis", JSON.stringify(apis));
  }, [apis]);

  const addApi = () => {
    if (!newApi.name.trim() || !newApi.url.trim()) return;
    setApis([...apis, { id: Date.now(), ...newApi }]);
    setNewApi({ name: "", url: "" });
  };

  const deleteApi = (id) => {
    const newApis = apis.filter((a) => a.id !== id);
    setApis(newApis);
  };

  const testApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">🌍 APIs & Tools</h2>

      {/* Add new API */}
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="API Name"
          value={newApi.name}
          onChange={(e) => setNewApi({ ...newApi, name: e.target.value })}
          className="flex-1 p-2 border rounded bg-gray-50 dark:bg-gray-900"
        />
        <input
          type="text"
          placeholder="API URL"
          value={newApi.url}
          onChange={(e) => setNewApi({ ...newApi, url: e.target.value })}
          className="flex-1 p-2 border rounded bg-gray-50 dark:bg-gray-900"
        />
        <button
          onClick={addApi}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Saved APIs */}
      <div className="grid gap-3">
        {apis.map((api) => (
          <div
            key={api.id}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border shadow flex justify-between items-center gap-2"
          >
            <div className="flex-1">
              <div className="font-bold">{api.name}</div>
              <div className="text-xs opacity-70">{api.url}</div>
            </div>
            <button
              onClick={() => testApi(api.url)}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Test
            </button>
            <button
              onClick={() => deleteApi(api.id)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Response Preview */}
      {response && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Response:</h3>
          <pre className="bg-black text-green-400 p-3 rounded overflow-x-auto text-sm">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
