import { useState } from "react";
import Edit from "./Edit";
import Submit from "./Submit";
import Input from "./Input";
import "/src/styles/Form.css";

export default function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      <>
        {/* TODO: add div wrappers for styling later on. */}
        <div className="personal-info">
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
              <Submit />
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <div className="personal-info submitted">
        <h3 className="name submitted">{nameFull}</h3>
        <h3>Contact Info</h3>
        <p className="email submitted">{email}</p>
        <p className="phone submitted">{phone}</p>
        <Edit onClick={handleEdit} />
      </div>
    );
  }
}

// function Input({ label, onChange, value, type, id }) {
//   return (
//     <>
//       <label htmlFor={id}>
//         {label}
//         <input type={type} id={id} value={value} onChange={onChange}></input>
//       </label>
//     </>
//   );
// }
