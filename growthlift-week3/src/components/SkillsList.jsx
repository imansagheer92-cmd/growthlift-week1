function SkillsList() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      
      <h2 className="text-2xl font-bold text-white mb-5">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-700 hover:bg-blue-600 text-gray-200 hover:text-white rounded-full transition"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

export default SkillsList;