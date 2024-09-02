import React, { useState, useEffect } from 'react';

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/cards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Cards Data</h1>
      <ul>

        {
          data?.map((item)=> <li key={item.id}>
            <table>
              <tr>
                <th>{item.title}</th>
                <td>: {item.description}</td>
              </tr>
            </table>
            </li>  )
        }

     </ul>
    </div>
  );
}

export default Cards;
