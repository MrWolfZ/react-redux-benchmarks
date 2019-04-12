import React, { useContext } from "react";
import { useReduxActions } from "@mrwolfz/react-redux-hooks-poc";
import { ReactReduxContext } from 'react-redux'
import Slice from "./Slice";
import { updateRandomPairInSlice } from "./pairActions";

export const App = () => {
  const { store } = useContext(ReactReduxContext)
  const nrOfSlices = Object.keys(store.getState()).length
  const actions = useReduxActions({ updateRandomPairInSlice }, [])

  return (
    <div>
      <button onClick={actions.updateRandomPairInSlice}>
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
