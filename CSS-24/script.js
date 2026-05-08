document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Mengambil data identitas
  const nama = document.getElementById("nama").value;
  const nomor = document.getElementById("nomor").value;

  // Mengambil jawaban (menggunakan FormData agar lebih mudah)
  const formData = new FormData(this);
  const jawaban = {};
  formData.forEach((value, key) => {
    jawaban[key] = value;
  });

  // Menampilkan hasil sederhana
  console.log("Peserta:", nama, "(", nomor, ")");
  console.log("Jawaban:", jawaban);

  alert(`Terima kasih ${nama}! Jawaban Anda telah terkirim.`);
});
