import React from "react";
import { updateInput } from "./inputs";
import * as c from "./constants";
import { useSelector, useDispatch } from "react-redux";

export const Form = ({ id }) => {
  const text = useSelector(state => state.inputs[id])
  const dispatch = useDispatch()
  const onChange = e => dispatch(updateInput({ inputId: id, text: e.target.value }))

  const fillers = Array.from({
    length: c.NUMBER_OF_CHECKBOXES_PER_FORM
  }).map((item, i) => <input type="checkbox" key={i} />);

  return (
    <React.Fragment>
      <form style={{ display: "flex", alignItems: "flex-start" }}>
        Form {id}:
          <textarea id={`input-${id}`} value={text} onChange={onChange} />
      </form>
      <div>{fillers}</div>
    </React.Fragment>
  );
}

export default Form
