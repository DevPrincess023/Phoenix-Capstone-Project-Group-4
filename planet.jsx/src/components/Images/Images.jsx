import React from 'react';
import './Image.css';

const Image = () => {
    const planets = [
        { name: "Mercury", dist: 57.9, img: "https://anurella.github.io/images/planets/mercury.webp" },
        { name: "Venus", dist: 108.2, img: "https://anurella.github.io/images/planets/venus.webp" },
        { name: "Earth", dist: 149.6, img: "https://anurella.github.io/images/planets/earth.jpg" }
    ];

    return (
        <div className="planet-container">
            <h1>Planet Distances</h1>
            {planets.map((p, i) => (
                <div key={i} className="planet-card">
                    <img src={p.img} alt={p.name} className="planet-img" />
                    <h2>{p.name}</h2>
                    <p>Distance: {p.dist} million km</p>
                </div>
            ))}
        </div>
    );
};

export default Image;