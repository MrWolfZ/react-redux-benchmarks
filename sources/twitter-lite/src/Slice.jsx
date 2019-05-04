import React from "react";
import { useSelector } from "react-redux";

import TwitterLite from "./TwitterLite";

export const Slice = ({ idx }) => {
  const slice = useSelector(state => state[idx]);
  return (
    <ul className="list-group">
      {slice.map(tweet => {
        return <TwitterLite sliceId={idx} tweet={tweet} />;
      })}
    </ul>
  );
}

export default Slice
