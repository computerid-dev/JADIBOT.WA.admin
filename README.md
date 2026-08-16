# JADI BOT WA — Admin Panel

Halaman buat approve/tolak akun user yang daftar. Deploy TERPISAH dari proyek utama, sebagai project Vercel sendiri.

## Deploy

1. Push folder ini ke GitHub (repo terpisah dari proyek utama)
2. Import ke Vercel → New Project
3. Isi Environment Variables sesuai `.env.example` (value udah keisi, tinggal copy)
4. Deploy

Setelah live, buka URL Vercel-nya (misal `jadibotwa-admin.vercel.app`), masukin `ADMIN_PASSWORD` buat masuk.

## Kenapa dipisah dari proyek utama?

Biar URL admin gak ketebak/dipromosikan bareng landing page publik, dan biar bisa diproteksi/dibatasin aksesnya secara terpisah kalau nanti mau ditambahin keamanan ekstra (misal batasin ke IP tertentu).
