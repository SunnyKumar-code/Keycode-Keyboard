let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let key = document.querySelector(".key");
const sound = new Audio('./sound.mp3');


body.addEventListener("keydown", function(e) {
    let name = e.code;
    let keyCode = e.keyCode;
    let combination = [];


    if (e.ctrlKey) combination.push('Ctrl');
    if (e.shiftKey) combination.push('Shift');
    if (e.altKey) combination.push('Alt');
    if (e.metaKey) combination.push('Meta');

  
    combination.push(name);


    p.innerHTML = keyCode;
    p.style.display = "block";

    h1.innerHTML = `You Have Pressed <span class="key">${combination.join(' + ')}</span>`;

  
    if (combination.length > 1) {
        sound.play();
    }
});
