// UNTUK IMAGE GALERY

// Menggunakan document.querySelector untuk mencari elemen dengan kelas "container-image" di dalam dokumen HTML dan menyimpannya dalam variabel container.
const container = document.querySelector('.container-image');
// Menggunakan document.querySelector untuk mencari elemen dengan kelas "jumbo" di dalam dokumen HTML dan menyimpannya dalam variabel jumbo.
const jumbo = document.querySelector('.jumbo');
// Menggunakan document.querySelectorAll untuk mencari semua elemen dengan kelas "thumb" di dalam dokumen HTML dan menyimpannya dalam variabel thumbs. Hasilnya akan berupa NodeList yang berisi daftar elemen dengan kelas tersebut.
const thumbs = document.querySelectorAll('.thumb');
// Menambahkan event listener pada elemen dengan kelas "container-image" agar ketika elemen tersebut diklik, function akan dijalankan.
container.addEventListener('click', function (e) {
    // Mengecek apakah elemen yang diklik memiliki kelas "thumb" dengan menggunakan e.target.classList.contains('thumb'). Jika ya, maka blok kode di dalam if akan dijalankan.
    if (e.target.classList.contains('thumb')) {
        // Mengganti atribut "src" dari elemen dengan kelas "jumbo" (gambar utama) dengan nilai "src" dari elemen yang diklik (gambar thumbnail) menggunakan e.target.src.
        jumbo.src = e.target.src;
        // Menambahkan kelas "fade" ke elemen dengan kelas "jumbo" untuk memberikan efek fade pada gambar utama.
        jumbo.classList.add('fade');
        // Menggunakan setTimeout untuk menghapus kelas "fade" dari elemen dengan kelas "jumbo" setelah 500 milidetik (0.5 detik). Ini menciptakan efek fade-out pada gambar utama.
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        // Menggunakan forEach untuk menghapus kelas "active" dari semua elemen dengan kelas "thumb". Ini menghilangkan status aktif pada semua thumbnail.
        thumbs.forEach(function (thumb) {
            thumb.classList.remove('active');
        });
        // Menambahkan kelas "active" ke elemen yang diklik (thumbnail yang baru dipilih) menggunakan e.target.classList.add('active'). Ini memberikan status aktif pada thumbnail yang sedang dipilih.
        e.target.classList.add('active');
    }
});
