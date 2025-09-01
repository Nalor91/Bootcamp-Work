// Task 1
let oneTimeTasks = [];
let monitoringTaskID;

// Task 2
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({function: func, delay: delay });
}

// Task 3
function runOneTimeTasks() {
    oneTimeTasks.forEach(task => {
        setTimeout(() => {
            task.function();
        }, task.delay);
    })
}

// Task 4
function startMonitoring() {
    console.log("Starting continuous monitoring...");

    monitoringTaskID = setInterval(
        function () {
            console.log("Current space Station conditions...");

            const temperatureLevel = Math.floor(Math.random() * 100);
            const oxygenLevel = Math.floor(Math.random() * 100);
            const powerStatus = Math.random() > 0.3 ? "Online" : "Offline";

          console.log(`Temperature Level: ${temperatureLevel.toFixed(2)}° | Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus}`);
        }, 
        3000
    );
}

// Task 5
function stopMonitoring() {
    clearInterval(monitoringTaskID);
    console.log("Stopped continuous monitoring.");
}

// Task 6
function startCountdown(duration) {
    let remainingTime = duration;

    const countdownInterval = setInterval(() => {        
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown finished. Time for Liftoff!");
        } else {
            console.log(`Remaining time: ${remainingTime} seconds`);
            remainingTime--;
        }
    }, 1000);
}

// Task 7
function scheduleMission() {
    startMonitoring();
    addOneTimeTask(function() {console.log("Pre-Launch system check complete.")}, 3000);
    addOneTimeTask(stopMonitoring, 6000);
    addOneTimeTask(function() {startCountdown(10)}, 9000);

    runOneTimeTasks();
}

scheduleMission();