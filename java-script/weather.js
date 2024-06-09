// MENGAMBIL DATA DARI API

// Mengambil elemen dengan ID "result" dari halaman, yang akan digunakan untuk menampilkan data cuaca.
let result = document.getElementById("result");
// Mengambil elemen dengan ID "search-btn" dari halaman, yang merupakan tombol untuk melakukan pencarian cuaca.
let searchBtn = document.getElementById("search-btn");
// Mengambil elemen dengan ID "city" dari halaman, yaitu input field untuk memasukkan nama kota.
let cityRef = document.getElementById("city");

// Mendefinisikan fungsi getWeather, yang akan dijalankan saat tombol pencarian cuaca diklik atau saat halaman dimuat.
let getWeather = () => {
  // Mendapatkan nilai yang dimasukkan pengguna ke dalam input field (nama kota) dan menyimpannya dalam variabel cityValue.
  let cityValue = cityRef.value;
  // Memeriksa apakah input field kosong. Jika kosong, maka akan menghapus isi dari elemen result (elemen tempat tampilan data cuaca). Jika tidak kosong, maka akan melakukan fetch data cuaca dari API.
  if (cityValue.length == 0) {
    result.textContent = "";
  } else {
    // Membuat URL untuk melakukan fetch data cuaca dari API OpenWeatherMap berdasarkan nama kota dan API key.
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=fd374d25b98317a0fb70f12a5b99eee8&units=metric`;
    // Mengosongkan input field setelah pencarian dilakukan.
    cityRef.value = "";
    // Melakukan fetch data cuaca dari API menggunakan URL yang telah dibuat sebelumnya. Jika berhasil, data JSON dari respons API akan diambil dan diproses selanjutnya.
    fetch(url)
      // Dalam blok .then, data JSON diolah untuk menampilkan informasi cuaca seperti nama kota, ikon cuaca, deskripsi cuaca, temperatur, temperatur maksimum, dan temperatur minimum.
      .then((resp) => resp.json())
      .then((data) => {
        // Mengambil data cuaca dari API dan menampilkan seluruh data yang diperoleh di konsol.
        console.log(data);
        // Menampilkan ikon cuaca (icon code) yang diperoleh dari data API di konsol.
        console.log(data.weather[0].icon);
        // Menampilkan kondisi cuaca utama (misalnya "Clouds", "Rain", "Clear", dll.) yang diperoleh dari data API di konsol.
        console.log(data.weather[0].main);
        // Menampilkan deskripsi kondisi cuaca (misalnya "broken clouds", "moderate rain", "clear sky", dll.) yang diperoleh dari data API di konsol.
        console.log(data.weather[0].description);
        // Menampilkan nama kota yang diperoleh dari data API di konsol.
        console.log(data.name);
        // Menampilkan temperatur minimum dalam satuan Celsius yang diperoleh dari data API di konsol.
        console.log(data.main.temp_min);
        // Menampilkan temperatur maksimum dalam satuan Celsius yang diperoleh dari data API di konsol.
        console.log(data.main.temp_max);

        // Menghapus semua elemen child (anak) yang ada di dalam elemen result, sehingga elemen ini menjadi kosong sebelum menampilkan data cuaca yang baru.
        while (result.firstChild) {
          result.removeChild(result.firstChild);
        }

        // Membuat elemen <h2> baru untuk menampilkan nama kota.
        let cityNameElement = document.createElement("h2");
        // Mengatur konten elemen <h2> dengan nilai data.name, yaitu nama kota dari data cuaca.
        cityNameElement.textContent = data.name;

        // Membuat elemen <h4> baru untuk menampilkan kondisi cuaca utama (misalnya "Clouds", "Rain", "Clear", dll.)
        let weatherMainElement = document.createElement("h4");
        // Menambahkan atribut class="weather" ke elemen <h4> agar bisa diberi gaya (CSS) secara terpisah.
        weatherMainElement.setAttribute("class", "weather");
        // Mengatur konten elemen <h4> dengan nilai data.weather[0].main, yaitu kondisi cuaca utama dari data cuaca.
        weatherMainElement.textContent = data.weather[0].main;

        // Membuat elemen <h4> baru untuk menampilkan deskripsi kondisi cuaca (misalnya "broken clouds", "moderate rain", "clear sky", dll.).
        let weatherDescElement = document.createElement("h4");
        // Menambahkan atribut class="desc" ke elemen <h4> agar bisa diberi gaya (CSS) secara terpisah.
        weatherDescElement.setAttribute("class", "desc");
        // Mengatur konten elemen <h4> dengan nilai data.weather[0].description, yaitu deskripsi kondisi cuaca dari data cuaca.
        weatherDescElement.textContent = data.weather[0].description;

        // Membuat elemen <img> baru untuk menampilkan ikon cuaca.
        let weatherIconElement = document.createElement("img");
        // Menambahkan atribut src ke elemen <img> dengan URL ikon cuaca yang diperoleh dari data cuaca.
        weatherIconElement.setAttribute(
          "src",
          `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        );

        // Membuat elemen <h1> baru untuk menampilkan suhu (temperatur) saat ini.
        let tempElement = document.createElement("h1");
        // Mengatur konten elemen <h1> dengan nilai ${data.main.temp} °, yaitu suhu saat ini (dalam derajat Celsius) dari data cuaca.
        tempElement.textContent = `${data.main.temp} °`;

        // Membuat elemen <h4> baru untuk menampilkan suhu minimum.
        let tempMinElement = document.createElement("h4");
        // Menambahkan atribut class="temp" ke elemen <h4> agar bisa diberi gaya (CSS) secara terpisah.
        tempMinElement.setAttribute("class", "temp");
        // Mengatur konten elemen <h4> dengan nilai min: ${data.main.temp_min}°, yaitu suhu minimum (dalam derajat Celsius) dari data cuaca.
        tempMinElement.textContent = `min: ${data.main.temp_min}°`;

        // Membuat elemen <h4> baru untuk menampilkan suhu maksimum.
        let tempMaxElement = document.createElement("h4");
        // Menambahkan atribut class="temp" ke elemen <h4> agar bisa diberi gaya (CSS) secara terpisah.
        tempMaxElement.setAttribute("class", "temp");
        // Mengatur konten elemen <h4> dengan nilai max: ${data.main.temp_max}°, yaitu suhu maksimum (dalam derajat Celsius) dari data cuaca.
        tempMaxElement.textContent = `max: ${data.main.temp_max}°`;

        // Menambahkan setiap elemen yang telah dibuat sebelumnya ke dalam elemen dengan ID "result" menggunakan metode appendChild(). Sehingga hasilnya akan ditampilkan di halaman web.
        result.appendChild(cityNameElement);
        result.appendChild(weatherMainElement);
        result.appendChild(weatherDescElement);
        result.appendChild(weatherIconElement);
        result.appendChild(tempElement);

        // Membuat elemen div baru untuk mengelompokkan informasi temperatur minimum dan maksimum dalam satu container.
        let tempContainer = document.createElement("div");
        // Menambahkan atribut class="temp-container" ke elemen "tempContainer" agar bisa diberi gaya (CSS) secara terpisah
        tempContainer.setAttribute("class", "temp-container");

        //  Membuat elemen div baru dengan nama "tempMinContainer" sebagai wadah untuk menampilkan informasi suhu minimum.
        let tempMinContainer = document.createElement("div");
        // Menambahkan elemen "tempMinElement" (informasi suhu minimum) ke dalam "tempMinContainer".
        tempMinContainer.appendChild(tempMinElement);

        // Membuat elemen div baru dengan nama "tempMaxContainer" sebagai wadah untuk menampilkan informasi suhu maksimum.
        let tempMaxContainer = document.createElement("div");
        // Menambahkan elemen "tempMaxElement" (informasi suhu maksimum) ke dalam "tempMaxContainer".
        tempMaxContainer.appendChild(tempMaxElement);

        // Menambahkan "tempMinContainer" (informasi suhu minimum) ke dalam "tempContainer".
        tempContainer.appendChild(tempMinContainer);
        // Menambahkan "tempMaxContainer" (informasi suhu maksimum) ke dalam "tempContainer".
        tempContainer.appendChild(tempMaxContainer);

        // Menambahkan elemen tempContainer ke dalam elemen result, sehingga informasi temperatur akan ditampilkan dalam satu container.
        result.appendChild(tempContainer);
      })
      // Dalam blok .catch, jika terjadi kesalahan dalam fetch data, maka pesan "City not found" akan ditampilkan di elemen result.
      .catch(() => {
        result.textContent = "City not found";
      });
  }
};
// Menambahkan event listener untuk tombol pencarian cuaca agar saat diklik, fungsi getWeather dijalankan.
searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);: Menambahkan event listener pada saat halaman dimuat (load) agar secara otomatis fungsi getWeather dijalankan.
window.addEventListener("load", getWeather);


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