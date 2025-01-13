import { useState } from "react";
import Input from "./Input";
import "/src/styles/Form.css";

export default function Experience() {
  const [experiences, setExperiences] = useState({
    company: "",
    title: "",
    responsibilities: "",
    dateStart: null,
    dateEnd: null,
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

  function handleDelete() {
    if (confirm("Are you sure you want to delete?")) {
      setIsDeleted(true);
    }
  }

  function handleSetCompany(e) {
    const newExperiences = { ...experiences, company: e.target.value };
    setExperiences(newExperiences);
  }

  function handleSetTitle(e) {
    const newExperiences = { ...experiences, title: e.target.value };
    setExperiences(newExperiences);
  }

  function handleSetRes(e) {
    const newExperiences = { ...experiences, responsibilities: e.target.value };
    setExperiences(newExperiences);
  }

  function handleSetStart(e) {
    const newExperiences = { ...experiences, dateStart: e.target.value };
    setExperiences(newExperiences);
  }

  function handleSetEnd(e) {
    const newExperiences = { ...experiences, dateEnd: e.target.value };
    setExperiences(newExperiences);
  }
  if (isDeleted) {
    return;
  } else if (!isSubmitted) {
    return (
      <div className="exp-form">
        <form onSubmit={handleSubmit}>
          <Input
            label={"Company Name: "}
            onChange={handleSetCompany}
            value={experiences.company}
          />
          <Input
            label={"Position Title: "}
            onChange={handleSetTitle}
            value={experiences.title}
          />
          <Input
            label={"Responsibilities: "}
            onChange={handleSetRes}
            value={experiences.responsibilities}
          />
          <Input
            label={"Employment Start: "}
            onChange={handleSetStart}
            value={experiences.dateStart}
            isRequired={true}
          />
          <Input
            label={"Employment End: "}
            onChange={handleSetEnd}
            value={experiences.dateEnd}
          />
        </form>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="exp-form submitted">
        <h3>{experiences.title}</h3>
        <h4>{experiences.company}</h4>
        <p>
          {!experiences.dateStart && !experiences.dateEnd
            ? ""
            : experiences.dateStart && experiences.dateEnd
            ? `${experiences.dateStart} - ${experiences.dateEnd}`
            : !experiences.dateEnd && experiences.dateStart
            ? `${experiences.dateStart} -`
            : `- ${experiences.dateEnd}`}
        </p>
        <p>{experiences.responsibilities}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
}
