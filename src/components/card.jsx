import { useState, useEffect } from 'react';
import './Card.css';

function Card({ element }) {
  const [voteCount, setVoteCount] = useState(() => {
    const savedVoteCount = localStorage.getItem(`voteCount-${element.name}`);
    return savedVoteCount ? parseInt(savedVoteCount) : element.voteCount || 0;
  });

  useEffect(() => {
    localStorage.setItem(`voteCount-${element.name}`, voteCount);
  }, [voteCount, element.name]);

  const incrementVote = () => {
    setVoteCount(prevCount => prevCount + 1);
  };

  const decrementVote = () => {
    setVoteCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent negative votes
  };

  return (
    <div className="card">
      <img src={element.img} className="card-image" alt={element.name} />
      <h2 className="card-title">{element.name}</h2>
      <h2 className="card-song">{element.song}</h2>
      <div className="vote-section">
        <button onClick={incrementVote} className="vote-button">👍</button>
        <span className="vote-count">{voteCount} votes</span>
        <button onClick={decrementVote} className="vote-button">👎</button>
      </div>
    </div>
  );
}

export default Card;
