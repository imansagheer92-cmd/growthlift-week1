import Card from "../components/Card";
import Counter from "../components/Counter";
import Toggle from "../components/Toggle";
import QuoteBox from "../components/QuoteBox";
import SkillsList from "../components/SkillsList";

function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-blue-400 font-semibold mb-3">GROWTHLIFT INTERNSHIP</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to My React App
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
          A responsive React application built using React, Vite, React Router and Tailwind CSS.
        </p>
        <a
          href="#features"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore My Work
        </a>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="React" description="JavaScript library for building user interfaces." color="#A78BFA" />
          <Card title="Vite" description="Fast and modern frontend build tool." color="#00C864" />
          <Card title="Tailwind CSS" description="Utility-first CSS framework for responsive design." color="#00B4D8" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">React Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Counter />
          <Toggle />
          <QuoteBox />
        </div>
        <div className="mt-6">
          <SkillsList />
        </div>
      </section>
    </main>
  );
}

export default Home;
