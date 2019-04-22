import React from 'react';

const Error = (props) => (    
    <div className={props.className}>
        <span>Error. Please try again. {props.message}</span>
    </div>
);

export default Error;