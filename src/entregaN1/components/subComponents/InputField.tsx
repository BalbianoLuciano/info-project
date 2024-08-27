import React from "react";
import '../PlaylistForm.css';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
