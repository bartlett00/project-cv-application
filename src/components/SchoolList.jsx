import { useState } from "react";
import Education from "./Education";

export default function EducationList() {
  const [schoolList, setSchoolList] = useState([<Education key={0} />]);
  let id = 0;

  function handleAddSchool() {
    let newSchoolList = [...schoolList];
    id += 1;
    let newSchool = <Education key={id} />;
    newSchoolList.push(newSchool);
    setSchoolList(newSchoolList);
  }
  return (
    <div className="schools-container">
      {schoolList}
      <button onClick={handleAddSchool}>+</button>
    </div>
  );
}
