import React from 'react';

const AddTodo = () => {
    let input;
    const { onAddClick } = this.props;
    return (
        <div>
            <input ref={ node => {
                input = node;
            }}/>
            <button onClick={
            onAddClick(input.value) 
            input.value = '';
            }}>
            Add ToDo
            </button>
        </div>
    );
}


export default AddTodo;