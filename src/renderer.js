const image = document.getElementById("image");
const refreshButton = document.getElementById("refreshButton");
const sizeText = document.getElementById("sizeText");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildImageUrl(width, height, seed) {
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

function createFallbackImage(width, height) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#e8e8e8"/>
                    <stop offset="100%" stop-color="#cfcfcf"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="#555">${width} × ${height}</text>
        </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setLoading(isLoading) {
    refreshButton.disabled = isLoading;
    refreshButton.textContent = isLoading ? "Загрузка..." : "Обновить";
    image.classList.toggle("loading", isLoading);
}

function showLoadedImage(src, width, height) {
    image.src = src;
    sizeText.textContent = `${width} × ${height} px`;
    setLoading(false);
}

function loadRandomImage() {
    const width = randomInt(760, 1120);
    const height = randomInt(420, 680);
    const seed = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const url = buildImageUrl(width, height, seed);
    const probe = new Image();

    setLoading(true);
    sizeText.textContent = "—";

    probe.onload = () => showLoadedImage(url, probe.naturalWidth, probe.naturalHeight);
    probe.onerror = () => showLoadedImage(createFallbackImage(width, height), width, height);
    probe.src = url;
}

refreshButton.addEventListener("click", loadRandomImage);
window.addEventListener("DOMContentLoaded", loadRandomImage);
