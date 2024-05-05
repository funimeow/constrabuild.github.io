let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    const topBar = document.getElementById("topBar");
    const taskBar = document.querySelector(".task-bar");
    
    if (currentScrollPos == 0) {
        topBar.style.top = "0";
        taskBar.style.top = "40px"; // Adjust according to the height of the top bar
    } else if (prevScrollPos > currentScrollPos) {
        topBar.style.top = "0";
        taskBar.style.top = "40px"; // Adjust according to the height of the top bar
    } else {
        topBar.style.top = "-40px"; // Slide up the top bar
        taskBar.style.top = "0"; // Move the task bar to the top
    }
    prevScrollPos = currentScrollPos;
}
