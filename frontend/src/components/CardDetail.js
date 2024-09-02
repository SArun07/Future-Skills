import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CardDetail() {
  const { title } = useParams(); // Get the dynamic title parameter
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        // Encode title to handle spaces and special characters
        const encodedTitle = encodeURIComponent(title);
        const response = await fetch(`http://localhost:8000/cards/${encodedTitle}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCard(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [title]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!card) return <p>No card found</p>;

  return (
    <div>
      <h1>Card Detail</h1>
      <p>Title: {card.title}</p>
      <p>Description: {card.description}</p>
    </div>
  );
}

export default CardDetail;
