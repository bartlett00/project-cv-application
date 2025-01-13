import General from "./General";
import EducationList from "./SchoolList";
import ExperienceList from "./ExperienceList";
export default function App() {
  return (
    <>
      <h1 className="title">CV Builder</h1>
      <h2>Personal Info</h2>
      <General />
      <h2>Education</h2>
      <div className="schools-container">
        <EducationList />
      </div>
      <h2>Practical Experience</h2>
      <div className="experience-container">
        <ExperienceList />
      </div>
    </>
  );
}
