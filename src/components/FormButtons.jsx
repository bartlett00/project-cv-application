import Edit from "./Edit";
import Submit from "./Submit";

export default function FormButtons({ onClick }) {
  return (
    <div className="form-btns">
      <Edit onClick={onClick} />
      <Submit />
    </div>
  );
}
