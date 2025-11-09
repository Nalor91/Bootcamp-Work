import { useState } from "react";

import styles from "./MissionControl.module.css";

import MissionAction from "./MissionAction.jsx";
import MissionCard from "./MissionCard.jsx";
import MissionFilter from "./MissionFilter.jsx";

function MissionControl({ initialMissions }) {
    const initialFilter = "All";
    const [missions, setMissions] = useState(initialMissions);
    const [filter, setFilter] = useState(initialFilter);

    function MissionStatus(id, updatedStatus) {
        setMissions(priorMission => priorMission.map(mission => mission.id === id ? { ...mission, status: updatedStatus } : mission));
    }

    const filteredMissions = missions.filter(mission => filter === "All" || mission.status === filter);

    return (
        <div>
            <h1>Space Mission Control</h1>

            <div className={styles.filterContainer}>
                <MissionFilter setFilter={setFilter} />
            </div>

            {
                filteredMissions.map(mission => {
                    const { id, name, status, crew } = mission;

                    return (
                        <div
                            key={id}
                            className={styles.missionContainer}
                        >
                            <div>
                                <MissionCard
                                    name={name}
                                    status={status}
                                    crew={crew}
                                />
                            </div>

                            <div>
                                <MissionAction
                                    missionId={id}
                                    updateMissionStatus={MissionStatus}
                                />
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default MissionControl;