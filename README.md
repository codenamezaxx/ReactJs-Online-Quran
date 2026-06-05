# Quran Js - Aplikasi Web Quran Progresif

Quran Js adalah aplikasi web modern dan responsif untuk membaca Al-Qur'an. Aplikasi ini dirancang untuk memberikan pengalaman membaca yang lancar di berbagai perangkat, dengan dukungan untuk Progressive Web App (PWA) agar dapat diinstal di perangkat Anda.

## Fitur

- **Tampilan Ayat per Surah:** Jelajahi Al-Qur'an surah demi surah, dengan setiap ayat disajikan dengan jelas.
- **Terjemahan Bahasa Indonesia:** Nikmati terjemahan Al-Qur'an dalam Bahasa Indonesia untuk pemahaman yang lebih baik.
- **Mode Gelap/Terang:** Beralih antara mode gelap dan terang sesuai preferensi Anda. Pilihan tema Anda akan disimpan secara otomatis.
- **Fungsionalitas PWA:** Instal aplikasi di perangkat Anda untuk akses offline dan pengalaman seperti aplikasi asli.
- **Tafsir Ayat (Opsional):** Lihat tafsir singkat per ayat (jika tersedia dari API) untuk konteks tambahan.
- **Navigasi Mudah:** Beralih antar surah dengan tombol navigasi yang intuitif.
- **Tombol Kembali:** Tombol "Kembali ke Daftar Surah" untuk navigasi yang nyaman.
- **Responsif:** Desain yang dioptimalkan untuk tampilan yang indah di ponsel, tablet, dan desktop.

## Teknologi yang Digunakan

- **React:** Pustaka JavaScript untuk membangun antarmuka pengguna.
- **Axios:** Klien HTTP berbasis Promise untuk browser dan Node.js.
- **Tailwind CSS:** Framework CSS yang utilitas-first untuk styling yang cepat dan konsisten.
- **Workbox:** Pustaka untuk menambahkan dukungan offline ke aplikasi web, mendukung PWA.
- **React Router DOM:** Untuk perutean deklaratif di aplikasi React.

## Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/codenamezaxx/ReactJs-Online-Quran.git
    cd ReactJs-Online-Quran
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan aplikasi:**
    ```bash
    npm start
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## Penggunaan

- Navigasikan ke daftar surah di halaman utama.
- Klik pada nama surah untuk melihat ayat-ayatnya.
- Gunakan tombol panah di bagian bawah halaman untuk berpindah ke surah sebelumnya atau selanjutnya.
- Klik tombol "Tafsir" (jika tersedia) untuk membaca tafsir singkat ayat tersebut.
- Gunakan tombol toggle di header untuk beralih antara mode gelap dan terang.
- Klik tombol "Kembali ke Daftar Surah" di halaman surah untuk kembali ke daftar.

## Progressive Web App (PWA)

Aplikasi ini mendukung fungsionalitas PWA. Anda dapat menginstalnya di perangkat Anda (desktop atau seluler) melalui browser Anda (misalnya, Chrome, Edge). Setelah diinstal, Anda dapat menggunakannya secara offline.

### Cara Menginstal

1.  Buka aplikasi di browser yang mendukung PWA.
2.  Cari ikon "Instal aplikasi" di bilah alamat atau di menu browser Anda (biasanya ikon plus atau ikon komputer dengan panah bawah).
3.  Ikuti petunjuk untuk menginstal aplikasi.

## Kontribusi

Kontribusi dipersilakan! Jika Anda memiliki saran atau menemukan bug, jangan ragu untuk membuka `issue` atau mengajukan `pull request`.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.

## Kredit

- Data Al-Qur'an dan Tafsir disediakan oleh [Kemenag RI](https://quran.kemenag.go.id/).
- Icon logo dari [Flaticon](https://www.flaticon.com/).