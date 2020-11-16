export const constinue = (res, data) => {
  res.status(100).json({
    status: 100,
    message:
      "Tanggapan sementara ini menunjukkan bahwa segala sesuatu sejauh ini adalah OK dan bahwa klien harus melanjutkan dengan permintaan atau mengabaikannya jika sudah selesai.",
    data,
  });
};

export const switchProtocol = (res, data) => {
  res.status(101).json({
    status: 101,
    message:
      "Kode ini dikirim sebagai tanggapan ke header permintaan Upgrade oleh klien, dan menunjukkan protokol yang digunakan oleh server.",
    data,
  });
};

export const processing = (res, data) => {
  res.status(102).json({
    status: 102,
    message:
      "Kode ini menunjukkan bahwa server telah menerima dan memproses permintaan, tetapi belum ada respons.",
    data,
  });
};

export const ok = (res, data) => {
  res.status(200).json({
    status: 200,
    message: "Permintaan telah berhasil.",
    data,
  });
};

export const created = (res, data) => {
  res.status(201).json({
    status: 201,
    message:
      "Permintaan berhasil dan sumber daya baru telah dibuat sebagai hasilnya. Ini biasanya merupakan respons yang dikirim setelah permintaan PUT.",
    data,
  });
};

export const accepted = (res, data) => {
  res.status(202).json({
    status: 202,
    message:
      "Permintaan telah diterima tetapi belum ditindaklanjuti. Ini non-komitmen, artinya tidak ada cara di HTTP untuk kemudian mengirim respons asinkron yang menunjukkan hasil pemrosesan permintaan. Ini ditujukan untuk kasus di mana proses atau server lain menangani permintaan, atau untuk pemrosesan batch.",
    data,
  });
};

export const nonAuthoritativeInformation = (res, data) => {
  res.status(203).json({
    status: 203,
    message:
      "Kode respons ini berarti kumpulan informasi meta yang dikembalikan tidak disetel persis seperti yang tersedia dari server asal, tetapi dikumpulkan dari salinan lokal atau pihak ketiga. Kecuali kondisi ini, respons 200 OK lebih disukai daripada respons ini.",
    data,
  });
};

export const noContent = (res, data) => {
  res.status(204).json({
    status: 204,
    message:
      "Tidak ada konten yang akan dikirim untuk permintaan ini, tetapi header mungkin berguna. Agen-pengguna dapat memperbarui header cache-nya untuk sumber daya ini dengan yang baru.",
    data,
  });
};

export const resetContent = (res, data) => {
  res.status(205).json({
    status: 205,
    message:
      "Kode tanggapan ini dikirim setelah menyelesaikan permintaan untuk memberi tahu agen pengguna tampilan ulang dokumen yang mengirim permintaan ini.",
    data,
  });
};

export const partialContent = (res, data) => {
  res.status(206).json({
    status: 206,
    message:
      "Kode respons ini digunakan karena header rentang dikirim oleh klien untuk memisahkan unduhan menjadi beberapa aliran.",
    data,
  });
};

export const badRequest = (res, data) => {
  res.status(400).json({
    status: 400,
    message: "Respons ini berarti server tidak dapat memahami permintaan karena sintaks yang tidak valid.",
    data,
  });
};

export const unAuthorized = (res, data) => {
  res.status(401).json({
    status: 401,
    message:
      "Otentikasi diperlukan untuk mendapatkan respon yang diminta. Ini mirip dengan 403, tetapi dalam kasus ini, otentikasi dimungkinkan.",
    data,
  });
};

export const forbidden = (res, data) => {
  res.status(403).json({
    status: 403,
    message:
      "Klien tidak memiliki hak akses ke konten sehingga server menolak untuk memberikan tanggapan yang tepat.",
    data,
  });
};

export const notFound = (res, data) => {
  res.status(404).json({
    status: 404,
    message:
      "Server tidak dapat menemukan sumber daya yang diminta. Kode respon ini mungkin yang paling terkenal karena frekuensinya muncul di web.",
    data,
  });
};

export const gone = (res, data) => {
  res.status(410).json({
    status: 410,
    message: "Tanggapan ini akan dikirim ketika konten yang diminta telah dihapus dari server.",
    data,
  });
};

export const internalServerError = (res, data) => {
  res.status(500).json({
    status: 500,
    message: "Server mengalami situasi yang tidak diketahui cara menanganinya.",
    data,
  });
};

export const notImplemented = (res, data) => {
  res.status(501).json({
    status: 501,
    message: "Metode permintaan tidak didukung oleh server dan tidak dapat ditangani.",
    data,
  });
};

export const conflict = (res, data) => {
  res.status(409).json({
    status: 409,
    message:
      "Kode status 409 (Konflik) menunjukkan bahwa permintaan tidak dapat diselesaikan karena konflik dengan status sumber daya target saat ini. Kode ini digunakan dalam situasi di mana pengguna mungkin dapat menyelesaikan konflik dan mengirim ulang permintaan.",
    data,
  });
};
