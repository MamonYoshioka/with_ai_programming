import React from 'react';

function Button() {
    const hello =() =>{
        alert('hello');
    }
    return (
        <button onClick={hello}>Click me</button>
    );
}

export default Button;