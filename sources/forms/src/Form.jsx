import React from "react";
import { updateInput } from "./inputs";
import * as c from "./constants";
import { useReduxState, useReduxActions } from '@mrwolfz/react-redux-hooks-poc'

export const Form = ({ id }) => {
  const text = useReduxState(state => state.inputs[id])
  const { onChange } = useReduxActions({
    onChange: e => updateInput({ inputId: id, text: e.target.value })
  }, [id])

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
