"use strict";
function byId(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element: #${id}`);
    return el;
}
const question = byId("question");
const result = byId("result");
const answerText = byId("answer");
const yesBtn = byId("yes");
const noBtn = byId("no");
const backLink = byId("back");
function showAnswer(choice) {
    answerText.textContent = choice === "yes" ? "Yes" : "No";
    question.classList.add("hidden");
    result.classList.remove("hidden");
}
yesBtn.addEventListener("click", () => showAnswer("yes"));
noBtn.addEventListener("click", () => showAnswer("no"));
backLink.addEventListener("click", () => {
    result.classList.add("hidden");
    question.classList.remove("hidden");
});
function dodge() {
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
}
noBtn.addEventListener("mouseover", dodge);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    dodge();
});
