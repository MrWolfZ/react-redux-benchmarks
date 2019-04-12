import React, { useContext } from "react";
import "./App.css";
import { ReactReduxContext } from "react-redux";
import Slice from "./Slice";

export const App = () => {
  const { store } = useContext(ReactReduxContext)
  const slices = Array(Object.keys(store.getState()).length).fill(0)

  return (
    <div className="row">
      {slices.map((slice, idx) => {
        return (
          <div className="col-lg-4" key={idx}>
            <Slice idx={idx} />
          </div>
        );
      })}
    </div>
  );
}

export default App
