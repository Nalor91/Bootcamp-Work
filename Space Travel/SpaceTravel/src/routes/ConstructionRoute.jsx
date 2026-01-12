import React, {useState} from 'react';
import SpaceTravelMockApi from '../services/SpaceTravelMockApi';
import Ship from '../components/Ship';
import { NavLink, Outlet } from 'react-router-dom';
import Construction from '../pages/Construction';
import SpaceCraft from '../pages/Spacecrafts';

function ConstructionRoute() {
  
  
      const INITIAL_STATE = SpaceTravelMockApi.getMockDb().spacecrafts;   

    return (
      <div>
        <h3>SpaceCraft</h3>

        <Construction />          
          
        <SpaceCraft/>
      </div>          
          
      );    
}

export default ConstructionRoute;