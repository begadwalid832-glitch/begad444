type Choice = "yes" | "no";

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: #${id}`);
  return el as T;
}

const question = byId<HTMLDivElement>("question");
const result = byId<HTMLDivElement>("result");
const answerText = byId<HTMLElement>("answer");
const yesBtn = byId<HTMLButtonElement>("yes");
const noBtn = byId<HTMLButtonElement>("no");
const backLink = byId<HTMLAnchorElement>("back");

function showAnswer(choice: Choice): void {
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

// The "No" button dodges the cursor / finger
function dodge(): void {
  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
}
noBtn.addEventListener("mouseover", dodge);
noBtn.addEventListener("touchstart", (e: TouchEvent) => {
  e.preventDefault();
  dodge();
});
