import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Counter
      </h2>

      <div className="text-5xl font-bold text-blue-400 mb-6">
        {count}
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
        >
          -
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
        >
          +
        </button>
      </div>

    </div>
  );
}

export default Counter;