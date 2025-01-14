import { useState } from "react";
import Experience from "./Experience";

export default function ExperienceList() {
  const [expList, setExpList] = useState([<Experience key={0} />]);

  function handleAddExp() {
    let newExpList = [...expList];
    const id = newExpList.length;
    let newExp = <Experience key={id} />;
    newExpList.push(newExp);
    setExpList(newExpList);
  }
  return (
    <div className="experiences-container list-wrapper">
      {expList}
      <button onClick={handleAddExp}>+</button>
    </div>
  );
}
