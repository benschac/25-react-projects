import React from 'react';
import store from '../index.js'; 

const FilterLink = ({
    filter,
    currentFilter,
    children,
    onFilterClick,
    onClick
}) => {
        
        if(filter === currentFilter) {
            return <span>{children}</span>
        }    
    return (
        <a href="#"
           onClick={e => {
               e.preventDefault();
               onClick={onFilterClick}
               
           }}>
           { children }
           </a>
    )
};

export default FilterLink;