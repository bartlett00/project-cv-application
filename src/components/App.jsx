import General from "./General";
import EducationList from "./SchoolList";
import ExperienceList from "./ExperienceList";
import "/src/styles/styles.css";

export default function App() {
  return (
    <>
      <header>
        <h1 className="title">CV Builder</h1>
      </header>
      <main>
        <section className="personal-section">
          <h2>Personal Info</h2>
          <General />
        </section>
        <section className="edu-section">
          <h2>Education</h2>
          <div className="schools-container">
            <EducationList />
          </div>
        </section>
        <section className="exper-section">
          <h2>Practical Experience</h2>
          <div className="experience-container">
            <ExperienceList />
          </div>
        </section>
      </main>
    </>
  );
}
