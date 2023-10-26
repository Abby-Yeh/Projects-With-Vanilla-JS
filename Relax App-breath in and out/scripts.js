const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 10000; //10s
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime / 5;


breathAnimation();

function breathAnimation(){
    text.innerHTML = "Breathe In";
    container.className = "container grow";

    setTimeout(()=>{
        text.innerHTML = "Hold On";

        setTimeout(()=>{
            text.innerHTML = "Breathe Out";
            container.className = "container shrink";
        },holdTime);

    },breatheTime);

}

setInterval(breathAnimation,totalTime);
