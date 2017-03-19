import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import deepFreeze from 'deepfreeze';
import { todos } from './index.js'


describe('todos reducer', () => {
  it('should handle inital state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    const stateBefore = [];
    const action = {
      type: "ADD_TODO",
      id: 0,
      text: 'Learn Redux',
    }
    const stateAfter = [{
      id: 0,
      text: 'Learn Redux',
      completed: false
    }];
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);

  });
});
