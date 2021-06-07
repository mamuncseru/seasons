import React from 'react';


const ErrorMsg = (props) => {

    return (
        <>
        <i className="massive eye slash icon"></i>
        <br />
        <h1><div center='true' >{props.message}</div></h1>
        </>
    );
};

export default ErrorMsg;