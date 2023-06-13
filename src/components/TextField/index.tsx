/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./styles.scss";
import clsx from "clsx";

interface TextFieldProps {
  type?: string;
  value: string;
  name: string;
  error?: any;
  onChange: (e: any, name: string) => void;
  placeholder: string;
}

const TextField = ({
  type = "text",
  value,
  name,
  error,
  onChange,
  placeholder,
  ...other
}: TextFieldProps) => {
  const isShowVisible = type === "password";
  const [showPassword, setShowPassword] = useState(false);
  const errorMsg = error?.[name];

  return (
    <div style={{ position: "relative", width: '100%' }}>
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(e, name)}
        className={clsx(["textfield", errorMsg && "textfield_error"])}
        placeholder={placeholder}
        type={isShowVisible ? (showPassword ? "text" : "password") : type}
        {...other}
      />
      {isShowVisible && (
        <button
          className="input-button"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="input-icon" />
          ) : (
            <AiOutlineEye className="input-icon" />
          )}
        </button>
      )}

      {
        errorMsg && <div className="textfield_error-text">
          {errorMsg}
        </div>
      }
    </div>
  );
};

export default TextField;
