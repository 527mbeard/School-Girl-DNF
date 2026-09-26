const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");

document.querySelectorAll(".subject").forEach(card => {
  card.addEventListener("click", () => {
    title.textContent = card.dataset.title;
    text.textContent = card.dataset.text;
    modal.classList.add("open");
  });
});

document.getElementById("close").addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("open"); });
document.addEventListener("keydown", e => { if(e.key === "Escape") modal.classList.remove("open"); });

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  const open = nav.dataset.open === "true";
  nav.dataset.open = String(!open);
  nav.style.display = open ? "" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.right = "6vw";
  nav.style.padding = "20px";
  nav.style.background = "#fffdf9";
  nav.style.border = "1px solid #d9cfc7";
});
