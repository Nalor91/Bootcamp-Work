import {useNavigate} from 'react-router-dom';

import styles from './NavigateBackButton.module.css';

function NavigateBackButton() {
    let navigate = useNavigate();

    return (
        <button 
            className={styles.button}
            onClick={() => navigate(-1)}
        >
            Go Back
        </button>
    );
}

export default NavigateBackButton;