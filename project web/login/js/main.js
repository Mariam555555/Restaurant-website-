function showToast(message, duration = 3000) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
    toast.style.display = "none";
    }, duration);
}

const btn = document.getElementById("animatedBtn");

btn.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.1)";
});

btn.addEventListener("mouseout", () => {
  btn.style.transform = "scale(1)";
});
