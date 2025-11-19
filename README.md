

# 🗣️ Speech Command via Express & MQTT

Proyek ini adalah backend sederhana berbasis **Node.js (Express)** yang berfungsi untuk menerima perintah suara (speech command) dan mengirimkannya melalui **MQTT** ke topik yang telah ditentukan.

## 📁 Struktur Proyek

```

.
├── api/               # (Opsional) Folder untuk route modular
├── public/            # Folder untuk file statis (jika ada UI)
├── .env.example       # Contoh konfigurasi environment
├── .gitignore
├── index.js           # Entry point server Express dan koneksi MQTT
├── package.json
├── package-lock.json

````

## ⚙️ Environment Variables

Salin file `.env.example` menjadi `.env`, lalu isi nilai-nilainya:

```env
PORT=3000                # Port untuk server Express
MQTT_TOPIC=speech/input  # Topik MQTT yang akan dikirim
APP_URL=http://localhost:3000
````

> ✅ Pastikan broker MQTT kamu aktif dan mendukung koneksi dari server ini.

## 🚀 Cara Menjalankan

1. **Install dependency**:

```bash
npm install
```

2. **Jalankan server**:

```bash
npm run start
```

Server akan berjalan di `http://localhost:<PORT>`.

## 🧠 Cara Kerja

* Server menerima request dari klien (bisa berupa text hasil speech recognition).
* Data akan dikemas dan dipublikasikan ke MQTT sesuai topik di `.env`.

Contoh alur sederhana:

```
[Client Speech Result] → [Express POST Endpoint] → [MQTT Broker]
```

## 🧪 Contoh Request

```bash
curl -X POST http://localhost:3000/send-message \
  -H "Content-Type: application/json" \
  -d '{"message": "tutup"}'
```

## 🔐 Catatan Keamanan

* Pastikan `.env` tidak dikomit ke repositori publik.
* Jika menggunakan broker MQTT publik, pertimbangkan autentikasi atau whitelist IP.

---
