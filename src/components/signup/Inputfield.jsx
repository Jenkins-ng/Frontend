import React, { useRef, useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
};

const [enteredName, setEnteredName] = useState("");
const nameInputChangedHandler = (event) => {
  setEnteredName(event.target.value);
};

const formSubmissionHandler = (event) => {
  event.preventDefault();
};

const Inputfield = (props) => {
  const inputBlur = (event) => {
    setIsTouched(true);
  };
  const classes = `px-[20px] py-[6px] border-solid border-2 text-sm border-gray-500 rounded-lg bg-stone-300  focus:border-slate-300 outline-none + ${props.className}`;

  return (
    <div className="grid mb-2 w-full">
      <label className="mb-2 text-base text-slate-400 font-bold">
        {props.label}
        <input
          type={props.type || "text"}
          placeholder={props.placeholder}
          className={classes}
          required
          value={props.state}
          onChange={nameInputChangedHandler}
          onBlur={props.onblurhandler || ""}
          multiple
          accept={props.accept || ""}
          onChanged={props.onImageChange}
        />
      </label>
    </div>
  );
};

export default Inputfield;
