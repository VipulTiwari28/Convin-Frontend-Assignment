import React from 'react';
import Card from './Card';

const Bucket = ({ bucket, cards, onDeleteCard, onMoveCard }) => {
    return (
        <div className="bucket">
            <h2>{bucket.name}</h2>
            <div className="cards">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onDeleteCard={onDeleteCard}
                        onMoveCard={onMoveCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bucket;
