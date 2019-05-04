import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../actions'

export const Node = ({ id, parentId }) => {
  const { counter, childIds } = useSelector(state => state[id])
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(actions.increment(id))
  }

  function handleAddChildClick(e) {
    e.preventDefault()

    const childId = dispatch(actions.createNode()).nodeId
    dispatch(actions.addChild(id, childId))
  }

  function handleRemoveClick(e) {
    e.preventDefault()

    dispatch(actions.removeChild(parentId, id))
    dispatch(actions.deleteNode(id))
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
