import { useState } from "react";
import Input from "./Input";

export default function General() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  //CSS placeholder state
  const [firstName, setFirstName] = useState("Kat");
  const [lastName, setLastName] = useState("Coder");
  const [email, setEmail] = useState("test@test.com");
  const [phone, setPhone] = useState("123 456 7890");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameFull = `${firstName} ${lastName}`;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted!");
    setIsSubmitted(true);
  }

  function handleEdit() {
    console.log("test");
    setIsSubmitted(false);
  }

  if (!isSubmitted) {
    return (
      <div className="personal-info-form form-container">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleFirstNameChange}
            label={"First Name: "}
            value={firstName}
            type={"text"}
            id={"first-name"}
          />
          <Input
            onChange={handleLastNameChange}
            label={"Last Name: "}
            value={lastName}
            type={"text"}
            id={"last-name"}
          />
          <Input
            onChange={handleEmailChange}
            label={"Email Address: "}
            value={email}
            type={"email"}
            id={"email"}
          />
          <Input
            onChange={handlePhoneChange}
            label={"Phone Number: "}
            value={phone}
            type={"tel"}
            id={"phone-number"}
          />
          <div className="form-btns">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="personal-info submitted">
        <h3 className="name submitted">{nameFull}</h3>
        <div className="contact-info-container">
          <h3>Contact Info</h3>
          <p className="email submitted">{email}</p>
          <p className="phone submitted">{phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </div>
    );
  }
}
