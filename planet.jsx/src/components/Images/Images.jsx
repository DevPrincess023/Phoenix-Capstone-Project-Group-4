import React from 'react';
import './Images.css';

const Images = () => {
    return (
        <div>
            <header>
                <h1>Visualizing the Differences Between Planets</h1>
                <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
            </header>

            <div className="planet-container">
                {[
                    { name: "Mercury", dist: 57.9, img: "https://anurella.github.io/images/planets/mercury.webp" },
                    { name: "Venus", dist: 108.2, img: "https://anurella.github.io/images/planets/venus.webp" },
                    { name: "Earth", dist: 149.6, img: "https://anurella.github.io/images/planets/earth.jpg" },
                    { name: "Mars", dist: 227.9, img: "https://anurella.github.io/images/planets/mars.webp" },
                    { name: "Jupiter", dist: 778.6, img: "https://anurella.github.io/images/planets/jupiter.webp" },
                    { name: "Saturn", dist: 1433.5, img: "https://anurella.github.io/images/planets/saturn.webp" },
                    { name: "Uranus", dist: 2872.5, img: "https://anurella.github.io/images/planets/uranus.webp" },
                    { name: "Neptune", dist: 4495.1, img: "https://anurella.github.io/images/planets/neptune.webp" },
                    { name: "Pluto", dist: 5906.4, img: "https://anurella.github.io/images/planets/pluto.webp" }
                ].map((item, i) => (
                    <div key={i} className="planet-card">
                        <img src={item.img} alt={item.name} className="planet-img" />
                        <h2>{item.name}</h2>
                        <p>Distance from Sun: {item.dist} million km</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Images;
