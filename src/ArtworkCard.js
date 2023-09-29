import React from 'react';

const ArtworkCard = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="ArtworkCard" onClick={onClick}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ArtworkCard;
