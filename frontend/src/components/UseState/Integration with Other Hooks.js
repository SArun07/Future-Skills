import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    if (loading) return <p>Loading...</p>;
    return <div>Data: {JSON.stringify(data)}</div>;
}
