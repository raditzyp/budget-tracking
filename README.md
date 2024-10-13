# API Documentation

## GET API

### Overview

API ini digunakan untuk mengambil data dari basis data. API ini menggunakan metode HTTP GET untuk mengambil data.

### Endpoint

* `http://localhost:5000/getAllTransaction`: Mengambil semua data yang tersedia.

### Parameter

Tidak ada parameter yang diperlukan untuk API ini.

### Response

API ini akan mengembalikan data dalam format JSON. Contoh respons:
```json
{
  "transactions": [
    {
      "id": "670963183cb4a2ebd4910cc5",
      "title": "Salary",
      "amount": 3000,
      "type": "EXPENSE",
      "createdAt": "2024-10-11T17:40:40.606Z",
      "updatedAt": "2024-10-11T17:40:40.606Z"
    },
    {
        "id": "670963213cb4a2ebd4910cc6",
        "title": "Salary",
        "amount": 5000,
        "type": "EXPENSE",
        "createdAt": "2024-10-11T17:40:49.590Z",
        "updatedAt": "2024-10-11T17:40:49.590Z"
    },
  ]
}
```
### Error Handling

Jika terjadi kesalahan, API ini akan mengembalikan respons dalam format JSON dengan kode kesalahan dan pesan kesalahan. Contoh respons kesalahan:
```json
{
  "error": {
    "code": 404,
    "message": "Data tidak ditemukan"
  }
}
```
### Contoh Penggunaan

Untuk menggunakan API ini, Anda dapat mengirimkan permintaan HTTP GET ke endpoint `/getAllTransaction`. Contoh menggunakan curl:

Untuk menampilkan semua data
```bash
curl http://localhost:5000/getAllTransaction
```

untuk membuat data baru
```bash
curl http://localhost:5000/createTransaction
```
