// Variables

// Functions

// Main
window.addEventListener("load", init);

function init() {
	load();
	eventListener();
}

function load() {
	AOS.init({
		once: true,
	});
}

function eventListener() {}

let hubungiKami = document.getElementById("hubungi-kami");

hubungiKami.addEventListener("submit", (e) => {
  e.preventDefault();
  let phone = '6289668089892';

  let nama = document.getElementById("nama");
  let email = document.getElementById("email");
  let notelp = document.getElementById("notelp");
  let pesan = document.getElementById("pesan");
  let layanans = document.querySelectorAll('input[name="layanan"]');
  let layananChecked;

  for (const layanan of layanans) {
    layananChecked = layanan.value;
    break;
  }

  location.href = `https://api.whatsapp.com/send?phone=${phone}&text=Nama: ${nama.value}%0AEmail: ${email.value}%0ALayanan: ${layananChecked}%0APesan: ${pesan.value}`;
});