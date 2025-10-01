document.addEventListener("DOMContentLoaded", function ()
{
	solveTask1();
    solveTask2();
    solveTask3();
    solveTask4();
    solveTask5();
    solveTask6();
    solveTask7();
    solveTask8();
    solveTask9();
});

function solveTask1 () {
    document.getElementById('task1').innerText = "Changed using 'innerText'.";
}
function solveTask2 () {
    document.getElementById('task2').innerHTML = "<button>Submit</button>"
}
function solveTask3 () {
    document.body.style.backgroundColor = "#232323";
}
function solveTask4 () {
    document.querySelectorAll('.item').forEach(item => {item.style.border = "1px solid black";});
}
function solveTask5 () {
    document.getElementById('task5').href = "https://www.springboard.com/";
}
function solveTask6 () {
    document.getElementById('task6').value = "DOM Master";
}
function solveTask7 () {
    document.getElementById('task7').classList = "new-class"
}
function solveTask8 () {
    const btn = document.createElement("button");
    btn.innerText = "New-Button";
    document.getElementById('task8').appendChild(btn);
}
function solveTask9 () {
    task9 = document.getElementById("task9");
    task9.parentNode.removeChild(task9);
}