import React from 'react';


const InputField = (props) => {
  return (
      <input
        className="form__input"
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
  )
}
export default InputField;
