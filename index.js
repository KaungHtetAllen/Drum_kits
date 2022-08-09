const kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);
    
    btnEl.style.backgroundImage = "url(img&song/" + kit + ".png"
    
    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl);

    audioEl.src = "img&song/" + kit +".mp3";


    btnEl.addEventListener("click",()=>{
        audioEl.play();
    });

    
    window.addEventListener("keydown",(event)=>{
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(0.9)";

            
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)"
            },100);
        }
    });
});

