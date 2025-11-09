import styles from "./MissionCard.module.css";

function MissionCard ({name, status, crew}) {
    return (
        <>
            <h2 className={styles.header}>{name}</h2>

            <p className={styles.detail}>Status: {status}</p>
            <p className={styles.detail}>Crew: {crew.join(", ")}</p>
        </>
    )
}

export default MissionCard;