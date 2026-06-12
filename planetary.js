const PlanetDashboard = () => {
    const planets = [
        { "planet": "Mercury", "distanceFromSun": 57.9, "image": "https://anurella.github.io/images/planets/mercury.webp" },
        { "planet": "Venus", "distanceFromSun": 108.2, "image": "https://anurella.github.io/images/planets/venus.webp" },
        { "planet": "Earth", "distanceFromSun": 149.6, "image": "https://anurella.github.io/images/planets/earth.jpg" },
        { "planet": "Mars", "distanceFromSun": 227.9, "image": "https://anurella.github.io/images/planets/mars.webp" },
        { "planet": "Jupiter", "distanceFromSun": 778.6, "image": "https://anurella.github.io/images/planets/jupiter.webp" },
        { "planet": "Saturn", "distanceFromSun": 1433.5, "image": "https://anurella.github.io/images/planets/saturn.webp" },
        { "planet": "Uranus", "distanceFromSun": 2872.5, "image": "https://anurella.github.io/images/planets/uranus.webp" },
        { "planet": "Neptune", "distanceFromSun": 4495.1, "image": "https://anurella.github.io/images/planets/neptune.webp" },
        { "planet": "Pluto", "distanceFromSun": 5906.4, "image": "https://anurella.github.io/images/planets/pluto.webp" }
    ];

    return (
        <section id="data-section">
            <h3>Visualizing the Differences Between Planets</h3>
            <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
            
            <div className="planet-grid-container">
                {planets.map((item, index) => (
                    <figure className="planet-card" key={index}>
                        <img src={item.image} alt={item.planet} className="planet-img" />
                        <figcaption>
                            <strong>{item.planet}</strong>
                            {/* Added the distance line back here */}
                            <p>Distance from Sun: {item.distanceFromSun} million km</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PlanetDashboard />);
