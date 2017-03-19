
import expect from 'expect';
import deepFreeze from 'deepfreeze';
import todos from './todos.js'


describe('todos reducer', () => {
  it('should handle initial state', () => {
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

  it('should handle TOGGLE_TODO', () => {
    const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn React Router',
      completed: false
    }
    ];

    const stateAfter = [
     {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn React Router',
      completed: true
    } 
    ]

    const action = {
      type: 'TOGGLE_TODO',
      id: 1,
      completed: true
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
    
  })
});
