import React from "react";
import Slice from "./Slice";
import * as c from "./constants";
import { incrementMany, incrementRandomCounter } from "./counters";
import { appendRandomCharacter, appendRandomCharToMany } from "./strings";
import { useReduxState, useReduxActions } from "@mrwolfz/react-redux-hooks-poc";

function doUpdateMany(mod) {
  return incrementMany({ mod });
}

export const App = () => {
  const slices = useReduxState(state => state.counters.slices)

  const actions = useReduxActions({
    incrementRandomCounter,
    incrementFifth: () => doUpdateMany(5),
    incrementThird: () => doUpdateMany(3),
    appendRandomCharacter,
    appendMany: appendRandomCharToMany(4),
  }, [])

  return (
    <div>
      <div>
        <button
          id="incrementRandom"
          onClick={actions.incrementRandomCounter}
        >
          Update Random Counter
        </button>
        <button id="incrementFifth" onClick={actions.incrementFifth}>
          Update 1/5 Counters
        </button>
        <button id="incrementThird" onClick={actions.incrementThird}>
          Update 1/3 Counters
        </button>
        <button
          id="appendRandomCharacter"
          onClick={actions.appendRandomCharacter}
        >
          Append Random Char
        </button>
        <button id="appendMany" onClick={actions.appendMany}>
          Append Char to Many
        </button>
      </div>
      <div className="row">
        {slices.map((slice, idx) => {
          return (
            <div style={{ display: "inline-block", minWidth: 70 }} key={idx}>
              <Slice idx={slice} remainingDepth={c.TREE_DEPTH} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
