
document.querySelector("#click")
    .addEventListener("click", incrementCountDiv);

document.querySelector("h1")
    .addEventListener("click", annoyingPopUp);

document.querySelector("#count")
    .addEventListener("click", (e) => {
        whisper(parseInt(e.target.textContent));
    });

collect();