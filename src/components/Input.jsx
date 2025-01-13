export default function Input({
  label,
  onChange,
  value,
  type,
  id,
  isRequired,
}) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          required={isRequired}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
}
