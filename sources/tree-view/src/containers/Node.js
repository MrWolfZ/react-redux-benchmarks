import React from 'react'
import { useReduxActions, useReduxState } from '@mrwolfz/react-redux-hooks-poc'
import * as actions from '../actions'

export const Node = ({ id, parentId }) => {
  const { counter, childIds } = useReduxState(state => state[id])

  const {
    increment,
    createNode,
    addChild,
    removeChild,
    deleteNode,
  } = useReduxActions(actions, [])

  function handleIncrementClick() {
    increment(id)
  }

  function handleAddChildClick(e) {
    e.preventDefault()

    const childId = createNode().nodeId
    addChild(id, childId)
  }

  function handleRemoveClick(e) {
    e.preventDefault()

    removeChild(parentId, id)
    deleteNode(id)
  }

  function renderChild(childId) {
    return (
      <li key={childId}>
        <Node id={childId} parentId={id} />
      </li>
    )
  }

  return (
    <div>
      Counter #{id}: {counter}
      {' '}
      <button className="increment" onClick={handleIncrementClick}>
        +
      </button>
      {' '}
      {typeof parentId !== 'undefined' &&
        <a href="#" className="deleteNode" onClick={handleRemoveClick} // eslint-disable-line jsx-a11y/anchor-is-valid
          style={{ color: 'lightgray', textDecoration: 'none' }}>
          Delete
        </a>
      }
      <ul>
        {childIds.map(renderChild)}
        <li key="add">
          <a href="#" className="addChild" // eslint-disable-line jsx-a11y/anchor-is-valid
            onClick={handleAddChildClick}
          >
            Add child
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Node
