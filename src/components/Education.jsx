import { useState } from "react";
import Edit from "./Edit";
import Submit from "./Submit";
import Input from "./Input";
import "/src/styles/Form.css";

export default function Education({ key }) {
  const [studies, setStudies] = useState({
    school: "",
    study: "",
    dateStart: "",
    dateEnd: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit() {
    setIsSubmitted(false);
  }

  function handleSetSchool(e) {
    const newStudies = { ...studies, school: e.target.value };
    setStudies(newStudies);
  }

  function handleSetStudy(e) {
    const newStudies = { ...studies, study: e.target.value };
    setStudies(newStudies);
  }

  function handleSetStart(e) {
    const newStudies = { ...studies, dateStart: e.target.value };
    setStudies(newStudies);
  }

  function handleSetEnd(e) {
    const newStudies = { ...studies, dateEnd: e.target.value };
    setStudies(newStudies);
  }

  function handleDelete() {
    if (confirm("Are you sure you want to delete?")) {
      setIsDeleted(true);
      return <></>;
    }
  }

  if (isDeleted) {
    return;
  } else if (!isSubmitted) {
    return (
      <div className="school-form" id={`school-${key}`}>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            onChange={handleSetSchool}
            label={"School Name: "}
            value={studies.school}
          />
          <Input
            type={"text"}
            onChange={handleSetStudy}
            label={"Area of Study: "}
            value={studies.study}
          />
          <Input
            type={"text"}
            onChange={handleSetStart}
            label={"Date of Start: "}
            value={studies.dateStart}
          />
          <Input
            type={"text"}
            onChange={handleSetEnd}
            label={"Date of End: "}
            value={studies.dateEnd}
          />
          <Submit />
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="school-form submitted" id={`school-${key}`}>
        <h3 className="degree">{studies.study}</h3>
        <h4 className="school-name">{studies.school}</h4>
        <p className="date-start">{studies.dateStart}</p>
        <p className="date-end">{studies.dateEnd}</p>
        <Edit onClick={handleEdit} />
      </div>
    );
  }
}
