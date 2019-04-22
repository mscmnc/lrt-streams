import React from 'react';

const Error = (props) => (    
    <div className="row justify-content-center">
        <span>Error. Please try again. {props.message}</span>
    </div>
);

export default Error;