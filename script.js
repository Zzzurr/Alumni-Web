// Hitungan mundurnya ganti aja di "New date" nya ganti ke waktu kapan kalian alumni
var target = new Date("2026-08-04T20:00:00+09:00").getTime();

function pad(n){ return String(n).padStart(2,'0'); }

function tick(){
  var now = Date.now();
  var diff = target - now;
  var wrap = document.getElementById('countdown');

  if(diff <= 0){
    wrap.innerHTML = '<div class="unit" style="min-width:auto;"><span class="num" style="font-size:1.4rem; padding:0.6rem 1.2rem;">Acara sedang berlangsung &#127881;</span></div>';
    clearInterval(timer);
    return;
  }

  var d = Math.floor(diff / (1000*60*60*24));
  var h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  var m = Math.floor((diff % (1000*60*60)) / (1000*60));
  var s = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('cd-day').textContent = pad(d);
  document.getElementById('cd-hour').textContent = pad(h);
  document.getElementById('cd-min').textContent = pad(m);
  document.getElementById('cd-sec').textContent = pad(s);
}

tick();
var timer = setInterval(tick, 1000);
var cover = document.getElementById('cover');
var invitation = document.getElementById('invitation');
var openBtn = document.getElementById('openBtn');
var musicToggle = document.getElementById('musicToggle');
var bgm = document.getElementById('bgm');
var iconPlay = document.getElementById('iconPlay');
var iconPause = document.getElementById('iconPause');

openBtn.addEventListener('click', function(){
  cover.classList.add('leaving');
  setTimeout(function(){
    cover.style.display = 'none';
    invitation.classList.add('visible');
    window.scrollTo({top:0, behavior:'instant'});
  }, 850);

  // otomatis putar musik dari folder music/ ketika undangan lu buka yaaa :)
  bgm.play().then(function(){
    iconPlay.style.display='none';
    iconPause.style.display='block';
    musicToggle.classList.add('show');
  }).catch(function(){
    // browser bisa memblokir autoplay, tombol musik tetap muncul untuk diklik manual jadi harus ada trigernnya
    musicToggle.classList.add('show');
  });
});

musicToggle.addEventListener('click', function(){
  if(bgm.paused){
    bgm.play().then(function(){
      iconPlay.style.display='none';
      iconPause.style.display='block';
    }).catch(function(){});
  } else {
    bgm.pause();
    iconPlay.style.display='block';
    iconPause.style.display='none';
  }
});

// ---------- RSVP WhatsApp links bisa di ubah katanya sesuai keperluan ----------
var waNumber = "6281234567890"; // { ini nomor default} ubah sesuai nomor WA yg menjadi DEFAULT
var pesanHadir = encodeURIComponent("Assalamualaikum, saya konfirmasi akan HADIR pada acara Temu Kangen Alumnus 2006, 4 Agustus 2026. Terima kasih.");
var pesanTidak = encodeURIComponent("Assalamualaikum, mohon maaf saya berhalangan HADIR pada acara Temu Kangen Alumnus 2006, 4 Agustus 2026. Terima kasih.");

document.getElementById('rsvpHadir').href = "https://wa.me/" + waNumber + "?text=" + pesanHadir;
document.getElementById('rsvpTidak').href = "https://wa.me/" + waNumber + "?text=" + pesanTidak;
