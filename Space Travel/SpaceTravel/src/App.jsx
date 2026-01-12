import {
  Route,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from 'react-router-dom';
import styles from "./App.module.css";
import NavBar from './routes/NavBar.jsx';
import NavigateBackButton from './routes/NavigateBackButton.jsx';
import SpaceTravelApi from "./services/SpaceTravelApi.jsx"
import HomePage from "./pages/HomePage.jsx";
import Planets from "./pages/PlanetsPage.jsx";
import SpaceCraft from "./pages/Spacecrafts.jsx";
import ConstructionRoute from './routes/ConstructionRoute.jsx';
import Construction from './pages/Construction.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
	<Route path='/' element={<> <NavBar /> <Outlet /> <NavigateBackButton /></>}>
	  <Route 
	  	index 
		element={<HomePage />} 
	  />
	  <Route path="/planets" element={<Planets data={SpaceTravelApi.getPlanets()} />} />
	  <Route path="/spacecrafts" element={<ConstructionRoute />}>
	  	<Route 
			index 
			element={<SpaceCraft />} />
	  	<Route 
			path='construction' 
			element={<Construction />}
			loader={Construction} />
	  </Route>
	</Route>
  )
);

function App ()
{
	const data = [HomePage, Planets, SpaceCraft];
  return (    
	<RouterProvider router={router} />		
  );
}

export default App;
