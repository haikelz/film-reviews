<div align="center">
  <h1>Film Reviews</h1>
  <p>
    A simple project that implemented redux-toolkit. Still WIP!!
  </p>
</div>

## Stack

- React JS
- Tailwind CSS
- Redux Toolkit
- Cloudinary

## Setup

- Clone repo ini `git clone https://github.com/haikelz/film-reviews.git`.
- Masuk ke folder project `cd film-reviews`.
- Project ini menggunakan `json-server`. Jika kamu belum menginstallnya, silahkan install secara global `npm install -g json-server`. Setelah terinstall, silahkan jalankan perintah `json-server -w src/utils/data.json -p 5000`.
- Untuk menginstall semua dependencies sekaligus menjalankan dev server, silahkan ketik `yarn install && yarn run dev` dan lihat hasilnya di browser => `http://localhost:3000`.
- Untuk pengelolaan gambar, silahkan masuk ke akun Cloudinary, dan copy **Cloud Name** dan **Upload Preset**, kemudian isikan ke `.env.local`(untuk contoh, silahkan lihat di file `.env.example`). Jangan lupa untuk menspesifikasikan folder yang ingin dipakai.
