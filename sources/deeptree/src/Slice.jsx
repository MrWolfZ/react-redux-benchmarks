import React from "react";
import { useReduxState } from "@mrwolfz/react-redux-hooks-poc";

const Counter = ({ idx }) => {
  const value = useReduxState(state => state.counters[idx])
  return <div>Value: {value}</div>;
};

const Slice = ({ remainingDepth, idx }) => {
  if (remainingDepth > 0) {
    return (
      <div>
        {idx}.{remainingDepth}
        <div>
          <Slice idx={idx} remainingDepth={remainingDepth - 1} />
        </div>
      </div>
    );
  }

  return <Counter idx={idx} />;
}

export default Slice;
