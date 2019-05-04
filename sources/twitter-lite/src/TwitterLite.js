import { createSelector } from "reselect";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const exampleMapStateToProps = createSelector(
  (state, props) => "foobar",
  foo => ({ foo })
);

const foobar = () => { };

export const Internal = () => {
  return <div>barfoo</div>;
}

export const InternalContainer = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const state = useSelector(exampleMapStateToProps, [])
  // eslint-disable-next-line no-unused-vars
  const dispatchFooBar = () => dispatch(foobar())

  return <Internal />;
}

export const Example = () => {
  return <InternalContainer />;
}

export const ExampleContainer = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const state = useSelector(exampleMapStateToProps, [])
  // eslint-disable-next-line no-unused-vars
  const dispatchFooBar = () => dispatch(foobar())

  return <Example />;
}

export default ExampleContainer;
