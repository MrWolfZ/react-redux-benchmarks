import React from "react";
import Slice from "./Slice";
import * as c from "./constants";
import { incrementRandomCounter } from "./counters";
import { useSelector, useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch()
  const slices = useSelector(state => state.slices)

  return (
    <div>
      <button onClick={() => dispatch(incrementRandomCounter())}>
        Update Random Counter
      </button>
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

export default App;
