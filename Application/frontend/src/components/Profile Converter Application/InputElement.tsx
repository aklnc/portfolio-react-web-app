import React from "react";

import { InputGroup, Form } from "react-bootstrap";

interface PropsInputElement {
  controlId: string;
  label: string;
  inputType: string;
  placeholder: string;
  value: string;
  setFunction: React.Dispatch<React.SetStateAction<string>>;
  setShowOutputs: React.Dispatch<React.SetStateAction<boolean>>
  setErrorText: React.Dispatch<React.SetStateAction<string>>
}

const InputElement = (props: PropsInputElement) => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id={props.controlId}>{props.label}</InputGroup.Text>
      <Form.Control
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        value={props.value}
        type={props.inputType}
        onChange={(e) => {
          props.setFunction(e.target.value);
          props.setShowOutputs(false)
          props.setErrorText("")
        }}
      />
    </InputGroup>
  );
};

export default InputElement;
