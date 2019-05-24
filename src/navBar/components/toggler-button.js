import React from 'react';

function TogglerButton(props) {
    return (
        <button 
        onClick={ props.changeValue }
        className="navbar-toggler navbar-light" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
    )
}

export default TogglerButton;
