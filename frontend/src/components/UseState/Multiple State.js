import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}
