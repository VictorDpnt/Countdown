const input = document.querySelector("#choice");
let totalSeconds;
let interval;



const Rebours = () =>{
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60

    

    const sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent = minutes +" : "+ sec

    if (totalSeconds > 0 ){
        totalSeconds--;
    } else {  
        countdownDisplay.textContent = "C'est terminé !";
    }
    
}









form.addEventListener('submit', (e)=>{
    e.preventDefault();
    totalSeconds = choice.value * 60;
    clearInterval(interval)
    interval = setInterval(Rebours, 1000);
    
})