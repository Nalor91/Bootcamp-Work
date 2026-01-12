import React, {useState} from "react";
import BuildShip from "../components/BuildShip";
import { v4 as uuid } from 'uuid';
import Ship from "../components/Ship";

function Construction() {
    const [showConstruction, setShowConstruction] = useState(false);

    const [spacecrafts, setSpacecrafts] = useState([]);
    const addShip = (newShip) => {
        setSpacecrafts(spacecrafts => [...spacecrafts, {...newShip, id: uuid()}]);
    }

        
    return (
        <div className="container">
            <div>
                <button onClick={() => setShowConstruction(true)}>Build a Spacecraft</button>                

                {showConstruction && (
                <div className="construction-form">
                    <button onClick={() => setShowConstruction(false)}>Back</button> 
                    <BuildShip addShip={addShip}/>                                         
                </div>
                )}
            </div>
        
            <div>
            {spacecrafts.map((ship, index) => (
                        <Ship 
                            key={index}
                            name={ship.name}
                            capacity={ship.capacity}
                        />
                    ))}        
            </div>
        </div>
    );
}

export default Construction;