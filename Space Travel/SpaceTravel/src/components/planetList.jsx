import SpaceTravelMockApi from "../services/SpaceTravelMockApi";

const PlanetList = () => {
    const planets = SpaceTravelMockApi.getMockDb().planets;

    return (
        <div>
            {planets.map((planet) => (
                <div key={planet.id}>
                    <h2>{planet.name}</h2>
                    <img src={planet.pictureUrl} alt={planet.name} width="100" />
                    <p>Current Population: {planet.curreuntPopulation}</p>
                </div>
            ))}
        </div>
    );
}

export default PlanetList;