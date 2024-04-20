let progressBar = document.getElementById('progress');
let width = 1;
let interval = setInterval(increaseProgress, 20);

function increaseProgress() {
    if (width >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            window.location.href = 'workoutpage.html';
        }, 1000);
    } else {
        width++;
        progressBar.style.width = width + '%';
    }
}
