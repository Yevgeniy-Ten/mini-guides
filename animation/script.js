const pulse = document.getElementById("pulse")

const pulsing = () => {
    pulse.classList.add("active");
    setTimeout(() => {
        pulse.classList.remove("active")
    }, 300)
}
document.addEventListener("mousemove", (e) => {
    pulse.style.left = e.x - 15 + "px"
    pulse.style.top = e.y - 15 + "px"
})
document.addEventListener("click", pulsing)