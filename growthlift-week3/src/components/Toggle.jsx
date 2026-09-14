import { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Toggle
      </h2>

      <p className="text-gray-400 mb-5">
        Status:
        <span className="text-white font-semibold ml-2">
          {on ? "ON" : "OFF"}
        </span>
      </p>

      <button
        onClick={() => setOn(!on)}
        className={`px-6 py-3 rounded-lg font-semibold transition ${
          on
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-600 hover:bg-gray-500"
        } text-white`}
      >
        {on ? "Turn Off" : "Turn On"}
      </button>

    </div>
  );
}

export default Toggle;