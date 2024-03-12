import { useEffect, useRef } from "react";

const Select = ({
  label,
  fieldName,
  onChangeHandler,
  options,
  defaultValue,
  resetCounter,
}) => {
  const selectRef = useRef();
  useEffect(() => {
    selectRef.current.value = defaultValue;
  }, [resetCounter, defaultValue]);
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <select
        ref={selectRef}
        id={fieldName}
        name={fieldName}
        onChange={onChangeHandler}
        defaultValue={defaultValue}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
