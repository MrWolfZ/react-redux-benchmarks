import React from "react";
import { useReduxState } from "@mrwolfz/react-redux-hooks-poc";

import TwitterLite from "./TwitterLite";

export const Slice = ({ idx }) => {
  const slice = useReduxState(state => state[idx]);
  return (
    <ul className="list-group">
      {slice.map(tweet => {
        return <TwitterLite sliceId={idx} tweet={tweet} />;
      })}
    </ul>
  );
}

export default Slice
