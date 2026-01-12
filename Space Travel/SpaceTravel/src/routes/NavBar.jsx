import { NavLink, Outlet } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div>
      <header>
        <nav className={styles.container}>
            <NavLink 
                to="/"
                className={styles.link}
                >
                Home
            </NavLink>

            <NavLink 
                to="/planets" 
                className={styles.link}
                >
                Planets
            </NavLink>

            <NavLink 
                to="/spacecrafts" 
                className={styles.link}
                >
                Spacecrafts
            </NavLink>
        </nav>
      </header>
      
    </div>
  );
}

export default NavBar;