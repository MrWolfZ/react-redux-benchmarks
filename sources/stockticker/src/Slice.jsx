import React from "react";
import { useSelector } from "react-redux";
import Pair from "./Pair";

export const Slice = ({ idx }) => {
  const slice = useSelector(state => state[idx]);
  return (
    <ul className="list-group">
      {slice.map(pair => {
        return <Pair key={pair.id} sliceId={idx} pairId={pair.id} />;
      })}
    </ul>
  );
}

export default Slice

// NOTE: this implementation can be improved by quite a bit by just selecting
// the pair ids, which prevents renders of this component when a pair changes
// its value; however, I have left it like this to make the benchmark scores
// comparable to the implementation using `connect`; below is the improved
// implementation

// export const Slice = ({ idx }) => {
//   const pairIds = useReduxState(state => state[idx].map(pair => pair.id));
//   return (
//     <ul className="list-group">
//       {pairIds.map(id => {
//         return <Pair key={id} sliceId={idx} pairId={id} />;
//       })}
//     </ul>
//   );
// }
