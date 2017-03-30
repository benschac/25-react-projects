import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { addTodo, Input } from '../actions'

let AddTodo = ({ dispatch, list }) => {
  let input

  return (
    <div>
    <h1>{list}</h1>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, list))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo