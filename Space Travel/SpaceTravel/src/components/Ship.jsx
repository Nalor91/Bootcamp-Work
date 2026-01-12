import React, {useState} from 'react';

const Ship = ({name, capacity}) => {   

    return (        
        <div>
            <p>Name: {name}</p>
            <p>Capacity: {capacity}</p>
            <button>Destroy</button>
        </div>        
    );
}

export default Ship;