import React from 'react';

const categoryName = (props) => (
    <div className='category-name'>
        <div className='content-wrapper'>
            <span>{props.label}:&nbsp;{props.category}</span>
        </div>         
    </div>
);

export default categoryName;