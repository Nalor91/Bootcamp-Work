import React, {useState} from 'react';

export default function DestroyButton({onDestroy}) {
    const handleDestroyClick = () => {
        if (onDestroy) {
            onDestroy();
        }
    };

    return (
        <button onClick={handleDestroyClick}>
            Destroy
        </button>
    );
}