import { useState } from "react";
import Education from "./Education";

export default function EducationList() {
  const [schoolList, setSchoolList] = useState([<Education key={0} />]);

  function handleAddSchool() {
    let newSchoolList = [...schoolList];
    const id = newSchoolList.length;
    console.log(id);
    let newSchool = <Education key={id} />;
    newSchoolList.push(newSchool);
    setSchoolList(newSchoolList);
  }
  return (
    <div className="schools-container list-wrapper">
      {schoolList}
      <button onClick={handleAddSchool}>+</button>
    </div>
  );
}
