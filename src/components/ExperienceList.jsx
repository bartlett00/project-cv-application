import { useState } from "react";
import Experience from "./Experience";

export default function ExperienceList() {
  const [expList, setExpList] = useState([<Experience key={0} />]);
  let id = 0;

  function handleAddExp() {
    let newExpList = [...expList];
    id += 1;
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
