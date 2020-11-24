const toolTip = document.querySelector('.storage__current');
const progressBar = document.querySelector('.storage__progress');
const progressValue = progressBar.dataset.value;
const progressMin = progressBar.dataset.min;
const progressMax = progressBar.dataset.max;


const progressAnimation = () => {
    let step = progressMax / 100; 
    let count = 0;
    let progress = progressMin;
    const delay = 15;
    
    const animationInterval = setInterval(() => {
        if (count <= progressValue) {
            progressBar.style.width = `${progress}%`;
            count += step;
            progress++;
        } else {
            clearInterval(animationInterval);
            toolTip.classList.add('active');
        }
    }, delay);
}

setTimeout(progressAnimation, 10);