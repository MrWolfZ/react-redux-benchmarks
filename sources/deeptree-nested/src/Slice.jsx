import React, { useEffect } from "react";
import { initialize, createStringId } from "./strings";
import { TEXT_INPUT_MOD } from "./constants";
import { useRedux, useReduxState } from "@mrwolfz/react-redux-hooks-poc";

const Counter = ({ idx }) => {
  const value = useReduxState(state => state.counters.counters[idx])
  return <div>Value: {value}</div>;
};

const TextDisplay = ({ idx, inputId, children }) => {
  const [{
    stringId,
    text,
  }, dispatch] = useRedux(state => {
    const stringId = createStringId(idx, inputId);
    const text = state.strings[stringId] || "unknown";
    return { stringId, text }
  })

  useEffect(() => {
    dispatch(initialize({ stringId }))
  }, [stringId])

  return (
    <div>
      Text {stringId}:<br />
      <textarea value={text} readOnly={true} />
      {children}
    </div>
  );
}

const Slice = ({ remainingDepth, idx }) => {
  if (remainingDepth > 0) {
    let renderedChild = (
      <div>
        {idx}.{remainingDepth}
        <div>
          <Slice idx={idx} remainingDepth={remainingDepth - 1} />
        </div>
      </div>
    );

    if (remainingDepth % TEXT_INPUT_MOD === 0) {
      renderedChild = (
        <TextDisplay
          idx={idx}
          inputId={remainingDepth / TEXT_INPUT_MOD}
        >
          {renderedChild}
        </TextDisplay>
      );
    }

    return renderedChild;
  }

  return <Counter idx={idx} />;
}

export default Slice;
