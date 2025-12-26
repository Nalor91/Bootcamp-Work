import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar({data}) {
  return (
    <nav className={styles.container}>
        <NavLink 
            to="/"
            className={styles.link}
            >
            Home
        </NavLink>

        {
            data.map(dataItem => (
                <NavLink 
                    key={dataItem.id}
                    to={`/content/${dataItem.id}`}
                    className={styles.link}
                >
                    {dataItem.title}
                </NavLink>
            ))
        }
    </nav>
  );
}

export default NavBar;