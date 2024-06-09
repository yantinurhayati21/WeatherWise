// MENGAMBIL DATA DARI API

// Mengambil elemen dengan ID "box" dari halaman HTML dan menyimpannya dalam variabel elemenOutput.
const elemenOutput = document.querySelector('#box');
// Mendeklarasikan variabel isDataFetched dengan nilai awal false. Variabel ini digunakan untuk melacak apakah data telah diambil dari API atau belum.
let isDataFetched = false;
// Mengambil elemen tombol dengan ID "gempa" dari halaman HTML dan menyimpannya dalam variabel gempaButton.
const gempaButton = document.querySelector('#gempa');

// Menambahkan event listener pada tombol "gempa" sehingga ketika tombol tersebut di-klik, fungsi tampil() akan dijalankan.
gempaButton.addEventListener('click', tampil);

// Memulai deklarasi fungsi tampil()
function tampil() {
  // Memeriksa apakah data telah diambil dari API dengan memeriksa nilai isDataFetched. Jika data sudah diambil, maka fungsi ini akan langsung mengembalikan nilai (return) tanpa melakukan pengambilan data dari API lagi.
  if (isDataFetched) {
    return;
  }

  // untuk mengambil data dari URL API yang disediakan.
  fetch('https://cuaca-gempa-rest-api.vercel.app/quake')
  // Melakukan pengolahan data menggunakan metode then untuk mengakses respons dari API setelah permintaan berhasil.
    .then(function (response) {
      //  Mengubah data respons menjadi format JSON dan mengembalikan nilai dari promise untuk diolah oleh then berikutnya.
      return response.json();
    })
    // Melakukan pengolahan data menggunakan metode then untuk mengakses data JSON yang telah diubah pada langkah sebelumnya.
    .then(function (json) {
      console.log(json);
      // Mengubah nilai isDataFetched menjadi true, menandakan bahwa data telah diambil dari API.
      isDataFetched = true; 

      // Membuat elemen div baru dengan nama "tamp" yang akan digunakan sebagai wadah untuk menampilkan informasi gempa.
      const tamp = document.createElement('div');
      // Menambahkan kelas "warna" ke elemen "tamp" agar elemen ini bisa diberi gaya (CSS) secara terpisah
      tamp.className = "warna";

      // Setiap baris 39 hingga 77: Membuat elemen-elemen seperti <p> dan <img> untuk menampilkan informasi gempa yang telah diambil dari data JSON. 
      // Setiap elemen ini kemudian ditambahkan ke dalam elemen "tamp" menggunakan metode appendChild().
      const elemen1 = document.createElement('p');
      elemen1.textContent = 'Tanggal : ' + json.data.tanggal;
      tamp.appendChild(elemen1);

      const elemen2 = document.createElement('p');
      elemen2.textContent = 'Jam  :' + json.data.jam;
      tamp.appendChild(elemen2);

      const elemen3 = document.createElement('p');
      elemen3.textContent = 'Bujur : ' + json.data.bujur;
      tamp.appendChild(elemen3);

      const elemen4 = document.createElement('p');
      elemen4.textContent = 'Coordinates : ' + json.data.coordinates;
      tamp.appendChild(elemen4);

      const elemen5 = document.createElement('p');
      elemen5.textContent = 'Kedalaman : ' + json.data.kedalaman;
      tamp.appendChild(elemen5);

      const elemen6 = document.createElement('p');
      elemen6.textContent = 'Lintang : ' + json.data.lintang;
      tamp.appendChild(elemen6);

      const elemen7 = document.createElement('p');
      elemen7.textContent = 'Magnitude : ' + json.data.magnitude;
      tamp.appendChild(elemen7);

      const elemen8 = document.createElement('p');
      elemen8.textContent = 'Potensi : ' + json.data.potensi;
      tamp.appendChild(elemen8);

      const elemen9 = document.createElement('p');
      elemen9.textContent = 'Wilayah : ' + json.data.wilayah;
      tamp.appendChild(elemen9);

      const elemen10 = document.createElement('img');
      elemen10.src = json.data.shakemap;
      tamp.appendChild(elemen10);

      // Membersihkan konten sebelumnya di dalam elemen dengan ID "box" (yang diwakili oleh variabel elemenOutput).
      elemenOutput.textContent = '';
      // Menambahkan elemen "tamp" yang berisi informasi gempa ke dalam elemen dengan ID "box", sehingga informasi gempa akan ditampilkan di halaman.
      elemenOutput.appendChild(tamp);
    })
}


// UNTUK READ MORE
// Mendapatkan semua elemen tombol dengan kelas "btn"
const readMoreButtons = document.querySelectorAll('.btn');

// Tambahkan event listener untuk setiap tombol
readMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Mendapatkan URL dari data atribut "data-url"
    const url = this.dataset.url;

    // Arahkan pengguna ke URL yang sesuai
    window.location.href = url;
  });
});


// UNTUK LOAD MORE

// Mengambil referensi tombol "Load More" dari halaman HTML menggunakan selektor CSS #load-more dan menyimpannya dalam variabel loadMoreBtn.
let loadMoreBtn = document.querySelector('#load-more');
// Mendefinisikan variabel currentItem dengan nilai awal 3, yang digunakan untuk melacak indeks item terakhir yang ditampilkan.
let currentItem = 3;

// digunakan untuk menambahkan event listener pada tombol dengan ID load-more (diseleksi dengan querySelector('#load-more')). Ketika tombol tersebut diklik, event listener ini akan memanggil fungsi loadMore().
loadMoreBtn.addEventListener('click', loadMore);

// Memulai deklarasi fungsi loadMore.
function loadMore() {
  // Mengambil semua elemen dengan kelas "box" yang berada di dalam elemen dengan kelas "box-container" yang berada di dalam elemen dengan kelas "container-cards" menggunakan selektor CSS .container-cards .box-container .box, dan menyimpannya dalam variabel boxes.
  let boxes = document.querySelectorAll('.container-cards .box-container .box');
  // Memulai loop for yang akan berjalan sebanyak 3 kali (untuk menampilkan 3 item selanjutnya).
  for (let i = currentItem; i < currentItem + 3; i++) {
    // Mengambil elemen "box" ke-i dari NodeList boxes dan menyimpannya dalam variabel box.
    let box = boxes[i];
    // Memulai kondisi, memeriksa apakah elemen box ada (tidak null). Jika ada, maka lanjutkan dengan menambahkan kelas "visible" ke elemen tersebut.
    if (box) {
      // Menambahkan kelas "visible" ke elemen box, yang kemudian akan mengubah tampilan elemen tersebut menjadi terlihat.
      box.classList.add('visible');
    }
  }
  // Menambahkan nilai currentItem sebanyak 3 agar menandakan indeks item berikutnya yang akan ditampilkan pada saat tombol "Load More" diklik kembali.
  currentItem += 3;
  // Memeriksa apakah currentItem sudah mencapai atau melebihi jumlah total elemen boxes (item). Jika iya, maka artinya sudah tidak ada item lagi yang bisa ditampilkan, dan tombol "Load More" akan disembunyikan.
  if (currentItem >= boxes.length) {
    // Menambahkan kelas "hidden" ke elemen tombol "Load More" agar tombol tersebut disembunyikan dari tampilan halaman.
    loadMoreBtn.classList.add('hidden');
  }
}
