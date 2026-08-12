import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CinematicExperience from "./components/CinematicExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="snap-container">
        <Hero />

        <CinematicExperience />

        <Contact />
      </main>
    </div>
  );
}

export default App;