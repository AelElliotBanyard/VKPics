import { InputProps } from "@/types";

const Input = ({ label, value, onChange, type }: InputProps) => {
  return (
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input
        className="input__input"
        type={type ? type : "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
