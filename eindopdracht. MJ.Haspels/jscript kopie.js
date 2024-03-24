window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click" , calculateLove)
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName!= "" && crushName != "")
{       let percentage = Math.floor (Math.random()*101); //0-.999999 * -> 0- 100.999999
        document.getElementById("result-message").innerText = yourName + " and " + crushName + " 's chance of love: "
        document.getElementById("result-message").innerText = percentage.toString() + "%"

        
}}


// animatie hartjes

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector ('body');
    let heart = document.createElement ('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+ 'px';
    heart.style.top= y+ 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue
    +'deg)';

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },1000)
    })


