import React from 'react';
import FilterLink from './FilterLink.js';

const Footer = ({
    visibilityFilter,
    onFilterClick,
   
}) => (

    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL"
                    currentFilter={visibilityFilter}
                    >
        All
        </FilterLink>
        {' '}
        
        <FilterLink filter="SHOW_ACTIVE"
                    currentFilter={visibilityFilter}
                    >
        Active
        </FilterLink>
        {' '}
        <FilterLink filter="SHOW_COMPLETED"
                    currentFilter={visibilityFilter}
                    >
        Completed
        </FilterLink>
    </p>
    
);

export default Footer;