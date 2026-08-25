import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EngineeringJourney } from "./components/EngineeringJourney";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { CareerPilotProject } from "./components/CareerPilotProject";
import { OtherProjects } from "./components/OtherProjects";
import { ProblemSolving } from "./components/ProblemSolving";
import { AwsExperience } from "./components/AwsExperience";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <EngineeringJourney />
        <About />
        <Skills />
        <CareerPilotProject />
        <OtherProjects />
        <ProblemSolving />
        <AwsExperience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
