let startTime;

async function getNorwegianTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/timezone/Europe/Oslo");
    const data = await response.json();
    startTime = new Date(data.datetime);
    startCountdown();
  } catch (error) {
    console.error("Klarte ikke hente norsk tid, bruker lokal tid.");
    startTime = new Date(); // fallback
    startCountdown();
  }
}

function startCountdown() {
  const endOfNovember = new Date(startTime.getFullYear(), 10, 30, 23, 59, 59, 999); // 10 = november

  function updateCountdown() {
    const now = new Date();
    const elapsed = now - startTime;
    const currentTime = new Date(startTime.getTime() + elapsed);
    const diff = endOfNovember - currentTime;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "NNN is finally over🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const milliseconds = diff % 1000;

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    document.getElementById("milliseconds").textContent = String(milliseconds).padStart(3, '0');
  }

  setInterval(updateCountdown, 10);
}

getNorwegianTime();

let brukerStyle1 = true;

function switchTheme() {
  const themeLink = document.getElementById("theme");

  if (brukerStyle1) {
    themeLink.href = "style2.css";
  } else {
    themeLink.href = "style1.css";
  }

  brukerStyle1 = !brukerStyle1;

}
