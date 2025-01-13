import { Children } from "react";
import Edit from "./Edit";

export default function Form({
  onSubmit,
  isSubmitted,
  nameFull,
  email,
  phone,
}) {
  if (isSubmitted) {
    return (
      <div className="info-submitted">
        <h1 className="name submitted">{nameFull}</h1>
        <h2>Contact Info</h2>
        <p className="email submitted">{email}</p>
        <p className="phone submitted">{phone}</p>
        <Edit />
      </div>
    );
  } else {
    return <form onSubmit={onSubmit}>{Children}</form>;
  }
}
