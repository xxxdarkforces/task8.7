const clip = (v, min, max = Infinity) => {
    if (v < min) return min;
    else if (v > max) return max;
    else return v;
};

const randRange = (min, max) => Math.random() * max + min;
function bubble(x, y, rect, hue, target) {
    const size = randRange(20, rect.width / 10);
    const circleHue = hue + randRange(-20, 20);
    const animDuration = randRange(clip(size ** 2 / 1000, 1), 6)
    const zIndex = Math.random() < 0.1 ? 2 : -1;
    const circle = document.createElement("span");
    circle.className = "bubble";
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.background = `hsl(${circleHue}deg, 100%, 60%)`;
    circle.style.zIndex = zIndex
    circle.style.animationDuration = animDuration + "s";
    target.appendChild(circle);
}
function bubblestart() {
    document.querySelectorAll("[data-bubble-hue]").forEach((target) => {
        const rect = target.getBoundingClientRect();
        const hue = Number(target.getAttribute("data-bubble-hue"));
        const count = Number(target.getAttribute("data-bubble-count") || 50);
        for (let i = 0; i < count; i++) {
            const x = randRange(0, rect.width);
            const y = randRange(0, rect.height);
            bubble(x, y, rect, hue, target);
        }
    });
}
window.addEventListener("resize", () => {
    let del = document.querySelectorAll(".bubble");
    del.forEach(e => e.remove());
    bubblestart();
});
bubblestart();