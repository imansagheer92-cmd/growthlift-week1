function Card({ title, description, color }) {
  return (
    <div
      className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg hover:-translate-y-1 hover:border-gray-500 transition duration-300"
      style={{ borderTopColor: color, borderTopWidth: "4px" }}
    >
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{description}</p>

      <span
        className="inline-block mt-5 px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: `${color}20`, color }}
      >
        Technology
      </span>
    </div>
  );
}

export default Card;
