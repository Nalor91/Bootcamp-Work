import PlanetList from "../components/planetList";


export default function Planets({}) {      
    const planets = PlanetList();   
    
    return (   
        <div>
            <h1>Solar System</h1>
            <PlanetList data={planets} />
        </div>
    );
}

    