import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const Pair = React.memo(({ sliceId, pairId }) => {
  const { name, value } = useSelector(state => state[sliceId][pairId])
  const prevValue = useRef()

  const direction =
    prevValue.current === undefined ? 'up' :
      value > prevValue ? 'up' : 'down'

  useLayoutEffect(() => {
    prevValue.current = value
  })

  return (
    <li className="list-group-item">
      <span>{name}</span>
      <span
        className={
          "pull-right " +
          (direction === "up" ? "text-success" : "text-warning")
        }
      >
        <span
          className={
            "glyphicon " +
            (direction === "up"
              ? "glyphicon-arrow-up"
              : "glyphicon-arrow-down")
          }
        />
        <span>{value}</span>
      </span>
    </li>
  );
})

export default Pair;
