const card = document.getElementById("card-anim")
const cardBg = document.getElementById("card-bg")
const centerX = window.innerWidth / 2,
    centerY = window.innerWidth / 2
const cordinator = (e) => {
    const X = e.x - centerX
    const Y = e.y - centerY
    card.style.transform = `rotateX(${X + 200}deg) rotateY(${Y + 200}deg)`
}
card.addEventListener("mousedown", () => {
    cardBg.classList.add("active")
    document.addEventListener("mousemove", cordinator)
})
cardBg.addEventListener("mouseup", (e) => {
    e.target.classList.remove("active")
    document.removeEventListener("mousemove", cordinator)
})