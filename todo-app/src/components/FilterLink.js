import React from 'react';
import store from '../index.js'; 

const FilterLink = ({
    filter,
    currentFilter,
    children
}) => {
        
        if(filter === currentFilter) {
            return <span>{children}</span>
        }    
    return (
        <a href="#"
           onClick={e => {
               e.preventDefault();
               store.dispatch({
                   type: 'SET_VISIBILITY',
                   filter
               })
               
           }}>
           { children }
           </a>
    )
};

export default FilterLink;