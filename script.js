const openButton = document.getElementById("openButton");
const invitation = document.getElementById("convite");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const soundWave = document.getElementById("soundWave");
const copyPix = document.getElementById("copyPix");
const copyStatus = document.getElementById("copyStatus");

function setPlaying(isPlaying) {
  musicIcon.textContent = isPlaying ? "Ⅱ" : "▶";
  musicButton.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
  soundWave.classList.toggle("playing", isPlaying);
}

async function playMusic() {
  try {
    await music.play();
    setPlaying(true);
  } catch (error) {
    setPlaying(false);
  }
}

openButton.addEventListener("click", async () => {
  invitation.scrollIntoView({ behavior: "smooth" });
  await playMusic();
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    await playMusic();
  } else {
    music.pause();
    setPlaying(false);
  }
});

music.addEventListener("ended", () => setPlaying(false));

copyPix.addEventListener("click", async () => {
  const pix = "11949357732";
  try {
    await navigator.clipboard.writeText(pix);
    copyStatus.textContent = "Chave Pix copiada!";
    copyPix.textContent = "Copiado ✓";
    setTimeout(() => {
      copyStatus.textContent = "Toque para copiar a chave";
      copyPix.textContent = "Copiar Pix";
    }, 2500);
  } catch {
    copyStatus.textContent = "Não foi possível copiar automaticamente.";
  }
});
