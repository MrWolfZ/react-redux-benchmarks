import { createSelector } from "reselect";
import React from "react";
import { useReduxState, useReduxActions } from "@mrwolfz/react-redux-hooks-poc";

const exampleMapStateToProps = createSelector(
  (state, props) => "foobar",
  foo => ({ foo })
);

const foobar = () => { };

export const Internal = () => {
  return <div>barfoo</div>;
}

export const InternalContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const state = useReduxState(exampleMapStateToProps)
  // eslint-disable-next-line no-unused-vars
  const actions = useReduxActions({ foobar })

  return <Internal />;
}

export const Example = () => {
  return <InternalContainer />;
}

export const ExampleContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const state = useReduxState(exampleMapStateToProps)
  // eslint-disable-next-line no-unused-vars
  const actions = useReduxActions({ foobar })

  return <Example />;
}

export default ExampleContainer;
