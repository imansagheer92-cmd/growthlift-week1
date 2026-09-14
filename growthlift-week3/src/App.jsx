import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import QuoteBox from "./components/QuoteBox";
import SkillsList from "./components/SkillsList";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Card
        title="React"
        description="JS library for UIs"
        color="#A78BFA"
      />

      <Card
        title="Vite"
        description="Fast build tool"
        color="#00C864"
      />

      <Card
        title="Tailwind"
        description="Utility-first CSS"
        color="#00B4D8"
      />

      <Counter />
      <Toggle />
      <QuoteBox />
      <SkillsList />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;