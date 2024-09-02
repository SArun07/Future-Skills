import React from 'react';
import { useMyContext } from '../context/MyContext';

const SomeComponent = () => {
    const context = useMyContext();

    if (!context) {
        // Context is not available, handle the error
        return <div>Context is not available</div>;
    }

    const { state, sharedFunction } = context;

    return (
        <div>
            <p>{state}</p>
            <button onClick={sharedFunction}>Call Shared Function</button>
        </div>
    );
};

export default SomeComponent;
