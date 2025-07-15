// ←– Update this date to when your relationship started:
const start = new Date("2020-06-01T00:00:00").getTime();

// ←– Replace with your own images (these can be in your repo or online URLs):
const photos = [
  "photos/photo1.jpg",
  "photos/photo2.jpg",
  "photos/photo3.jpg"
];

let i = 0;
const slideEl = document.getElementById("slide"),
      timeEl = document.getElementById("time");

function pad(n) { return n < 10 ? "0" + n : n; }

function update() {
  const now = Date.now(),
        diff = now - start,
        days = Math.floor(diff / 864e5),
        hrs = new Date(diff).getUTCHours(),
        mins = new Date(diff).getUTCMinutes(),
        secs = new Date(diff).getUTCSeconds();

  timeEl.innerText = `${days}d ${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;

  slideEl.src = photos[i];
  i = (i + 1) % photos.length;
}

// Start the counter & slideshow
update();
setInterval(update, 1000);
