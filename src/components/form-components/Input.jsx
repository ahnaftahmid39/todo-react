import { useEffect, useRef } from "react";

const Input = ({label, fieldName, onChangeHandler, type="text", resetCounter}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = '';
  }, [resetCounter])
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <input ref={inputRef} type={type} id={fieldName} name={fieldName} onChange={onChangeHandler} />
    </>
  );
}

export default Input;