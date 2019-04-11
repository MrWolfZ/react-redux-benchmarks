import React from "react";
import Form from "./Form";
import { typeTextInRandomInput } from "./inputs";
import { useReduxState } from '@mrwolfz/react-redux-hooks-poc'

async function infiniteBobRoss() {
  while (true) {
    await typeTextInRandomInput();
  }
}

export const App = () => {
  const slices = useReduxState(state => state.slices)

  return (
    <div>
      <button onClick={infiniteBobRoss}>Type Text</button>
      <div className="row">
        {slices.map((slice, idx) => {
          return (
            <div style={{ display: "inline-block", minWidth: 70 }} key={idx}>
              <Form id={slice} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
