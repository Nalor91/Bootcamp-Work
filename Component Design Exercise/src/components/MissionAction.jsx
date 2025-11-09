import styles from "./MissionAction.module.css";

function MissionAction ({missionId, updateMissionStatus}) {
    return (
        <>
            <button
                className={styles.button}
                onClick = {() => updateMissionStatus(missionId, "Active")}
            >
                Launch Mission
            </button>

            <button
                className={styles.button}
                onClick = {() => updateMissionStatus(missionId, "Completed")}
            >
                Complete Mission
            </button>
        </>
    );
}

export default MissionAction;