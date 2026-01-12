import React, {useState} from 'react';
import SpaceTravelMockApi from '../services/SpaceTravelMockApi';
import Ship from '../components/Ship';
import Construction from '../pages/Construction';

const SpaceCraft = () => {
    const INITIAL_STATE = SpaceTravelMockApi.getMockDb().spacecrafts;    

    return (
        <div>               
            {INITIAL_STATE.map(({id, name, capacity}) => (
                <Ship 
                     key={id}
                     name={name}
                    capacity={capacity}                        
                />
            ))}                       
        </div>
    );
}

export default SpaceCraft;