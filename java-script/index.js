// UNTUK HEADER

// Mengambil elemen dengan kelas "hamburger" dari halaman HTML dan menyimpannya dalam variabel hamburger.
const hamburger = document.querySelector(".hamburger");
// Mengambil elemen dengan kelas "nav-links" dari halaman HTML dan menyimpannya dalam variabel navLinks.
const navLinks = document.querySelector(".nav-links");
// Mengambil semua elemen <li> yang berada di dalam elemen dengan kelas "nav-links" dari halaman HTML dan menyimpannya dalam variabel links.
const links = document.querySelectorAll(".nav-links li");

// Menambahkan event listener pada elemen hamburger sehingga ketika elemen tersebut di-klik,  function akan dijalankan.
hamburger.addEventListener('click', () => {
    // Menggunakan metode toggle pada classList untuk menambahkan atau menghapus kelas "open" pada elemen navLinks. Ini akan mengontrol tampilan menu navigasi agar terbuka atau tertutup.
    navLinks.classList.toggle("open");
    // Memulai loop forEach untuk setiap elemen link (elemen <li>) di dalam variabel links.
    links.forEach(link => {
        // Menggunakan metode toggle pada classList untuk setiap elemen link untuk menambahkan atau menghapus kelas "fade". Ini akan mengontrol efek animasi (fade) pada setiap elemen <li> saat menu navigasi dibuka atau ditutup.
        link.classList.toggle("fade");
    });

    //Menggunakan metode toggle pada classList untuk elemen hamburger untuk menambahkan atau menghapus kelas "toggle". Ini akan mengontrol animasi (toggle) pada ikon hamburger sehingga berubah ketika menu navigasi dibuka atau ditutup.
    hamburger.classList.toggle("toggle");
});


// UNTUK DATETIME

// Mengambil elemen dengan kelas "time" dari halaman HTML dan menyimpannya dalam variabel timeElement.
const timeElement = document.querySelector(".time");
// Mengambil elemen dengan kelas "date" dari halaman HTML dan menyimpannya dalam variabel dateElement.
const dateElement = document.querySelector(".date");


// Mendefinisikan fungsi formatTime yang menerima parameter date (berupa objek Date).
function formatTime(date) {
    // Mendapatkan jam dalam format 12 jam dan menambahkan nol di depan jika hanya satu digit.
    const hours12 = date.getHours() % 12 || 12;
    // Mendapatkan menit dan menambahkan nol di depan jika hanya satu digit.
    const minutes = date.getMinutes();
    //  Memeriksa apakah jam saat ini kurang dari 12 (sebelum tengah hari) untuk menentukan apakah "AM" atau "PM".
    const isAm = date.getHours() < 12;

    // Menggabungkan hasil jam dan menit dalam format hh:mm AM/PM 
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

// Mendefinisikan fungsi formatDate yang menerima parameter date (berupa objek Date).
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

// Membuat fungsi yang bertugas untuk memperbarui waktu dan tanggal pada halaman.
function updateDateTime() {
    // variabel now dibuat dengan menginisialisasi objek Date baru.
    const now = new Date();

    // Mengubah konten teks dari elemen dengan kelas "time" menjadi hasil format waktu yang diperoleh dari fungsi formatTime(now).
    timeElement.textContent = formatTime(now);
    // Mengubah konten teks dari elemen dengan kelas "date" menjadi hasil format tanggal yang diperoleh dari fungsi formatDate(now).
    dateElement.textContent = formatDate(now);
}

// Menggunakan setInterval untuk memanggil fungsi updateDateTime() setiap 200 milidetik (0.2 detik). Ini akan memperbarui waktu dan tanggal secara terus-menerus.
setInterval(updateDateTime, 200);
// emanggil fungsi updateDateTime() saat halaman pertama kali dimuat agar waktu dan tanggal ditampilkan pada awalnya.
updateDateTime();


// UNTUK MEMUNCULKAN ALERT KETIKA TOMBOL SEND DI KLIK

// Menggunakan metode getElementById untuk mencari elemen dengan ID "sendMessageButton" di dalam dokumen HTML.
// Kemudian menambahkan addEventListener agar ketika tombol di klik akan manggil fungsi
document.getElementById('sendMessageButton').addEventListener('click', function () {
    // Ketika tombol "sendMessageButton" diklik, fungsi akan menampilkan kotak dialog (alert) dengan pesan "pesan anda telah disampaikan!". 
    alert('pesan anda telah disampaikan!');
});
