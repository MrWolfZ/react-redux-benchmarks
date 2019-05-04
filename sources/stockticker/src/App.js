import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ReactReduxContext } from 'react-redux'
import Slice from "./Slice";
import { updateRandomPairInSlice } from "./pairActions";

export const App = () => {
  const { store } = useContext(ReactReduxContext)
  const nrOfSlices = Object.keys(store.getState()).length
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(updateRandomPairInSlice)}>
        Update Random Pair
      </button>
      <div className="row">
        {Array(nrOfSlices).fill(0).map((slice, idx) => {
          return (
            <div className="col-lg-4" key={idx}>
              <Slice idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
