
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
      completed: false,
      edit: false
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
    
  });

  it('should handle DELETE_TODO with many todos', () => {
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
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ];
    const action = {
      type: 'DELETE_TODO',
      id: 1
    }
    const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('should handle DELETE_TODO with one todo', () => {
    const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
    ];
    const action = {
      type: 'DELETE_TODO',
      id: 0
    }
    const stateAfter = []

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('should handle DELETE_TODO thats been completed', () => {
        const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn React Router',
      completed: true
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ];
    const action = {
      type: 'DELETE_TODO',
      id: 1
    }
    const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('should handle EDIT_TODO with one todo', () => {
    const stateBefore = [
    {
      id: 1,
      text: 'Learn React Router',
      completed: false
    }
    ];
    const action = {
      type: 'EDIT_TODO',
      id: 1,
      text: 'Learn how to Moon Walk',
      completed: false
    }
    const stateAfter = [
    {
      id: 1,
      text: 'Learn how to Moon Walk',
      completed: false
    }
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('should handle EDIT_TODO with many todos', () => {
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
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ];

    const action = {
      type: 'EDIT_TODO',
      id: 1,
      text: 'Learn how to Moon Walk',
      completed: false
    }

    const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn how to Moon Walk',
      completed: false
    },
    {
      id: 2,
      text: 'Derp Derp Derp',
      completed: false
    }
    ];

    
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('should handle TOGGLE_EDIT', () => {
    const stateBefore = [
    {
      id: 1,
      text: 'Learn React Router',
      completed: false,
      edit: false
    }
    ];
    const action = {
      type: 'TOGGLE_EDIT',
      id: 1
    }
    const stateAfter = [
    {
      id: 1,
      text: 'Learn React Router',
      completed: false,
      edit: true
    }
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  })
});
