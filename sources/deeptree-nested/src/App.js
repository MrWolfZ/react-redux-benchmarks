import React from "react";
import Slice from "./Slice";
import * as c from "./constants";
import { incrementMany, incrementRandomCounter } from "./counters";
import { appendRandomCharacter, appendRandomCharToMany } from "./strings";
import { useRedux } from "@mrwolfz/react-redux-hooks-poc";

function doUpdateMany(mod) {
  return incrementMany({ mod });
}

export const App = () => {
  const [slices, dispatch] = useRedux(state => state.counters.slices)

  return (
    <div>
      <div>
        <button
          id="incrementRandom"
          onClick={() => dispatch(incrementRandomCounter())}
        >
          Update Random Counter
          </button>
        <button id="incrementFifth" onClick={() => dispatch(doUpdateMany(5))}>
          Update 1/5 Counters
          </button>
        <button id="incrementThird" onClick={() => dispatch(doUpdateMany(3))}>
          Update 1/3 Counters
          </button>
        <button
          id="appendRandomCharacter"
          onClick={() => dispatch(appendRandomCharacter())}
        >
          Append Random Char
          </button>
        <button id="appendMany" onClick={() => dispatch(appendRandomCharToMany(4))}>
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
