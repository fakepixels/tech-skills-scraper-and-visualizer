import React from "react";

const Input = ({ name, label, size, margin, id, ...rest }) => {
  return (
    <div className="form-group">
      <label className={"mt-4 " + margin} htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={id}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        className={"form-control " + size + " " + margin}
      />
    </div>
  );
};

export default Input;
