function Projects() {
  const projects = [
    { title: "React Components", description: "Reusable React components using props and state." },
    { title: "React Router", description: "Multiple pages with navigation and a custom 404 page." },
    { title: "Tailwind CSS", description: "Responsive UI styled with Tailwind utility classes." },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3 text-center">PORTFOLIO</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
