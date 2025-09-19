function openInvitation() {
      document.body.style.overflow = 'auto';
      document.querySelector('.cover-section').style.height = '100vh';
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }


function countdown() {
  const targetDate = new Date("2025-11-17T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

countdown();

function showRSVP() {
  document.getElementById("countdown-section").style.display = "none";
  document.getElementById("rsvp-section").style.display = "flex";
}

function submitForm(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const grup = document.getElementById("grup").value;
  const wa = document.getElementById("wa").value;
  const kehadiran = document.getElementById("kehadiran").value;
  const ucapan = document.getElementById("ucapan").value;

  // Buat elemen RSVP baru
  const rsvpItem = document.createElement("div");
  rsvpItem.classList.add("rsvp-item");
  rsvpItem.innerHTML = `
    <div class="rsvp-header">
      <strong>${nama}</strong> <span class="status ${kehadiran.toLowerCase()}">${kehadiran}</span>
    </div>
    <div class="rsvp-body">
      <small><i>Grup: ${grup || "-"}</i></small><br>
      <small>No WA: ${wa}</small><br>
      <p>${ucapan}</p>
    </div>
    <hr>
  `;

  // Masukkan ke daftar RSVP
  const list = document.getElementById("rsvp-list");
  list.prepend(rsvpItem); // prepend: tampilkan paling atas

  // Reset form
  document.getElementById("rsvp-form").reset();
}

const audio = document.getElementById("bgMusic");
  const cassette = document.getElementById("cassetteImage");
  const openBtn = document.querySelector(".open-btn");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    audio.play();
    cassette.classList.add("playing");
    document.querySelector(openBtn.getAttribute("href")).scrollIntoView({ behavior: 'smooth' });
  });

  cassette.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      cassette.classList.add("playing");
    } else {
      audio.pause();
      cassette.classList.remove("playing");
    }
  });