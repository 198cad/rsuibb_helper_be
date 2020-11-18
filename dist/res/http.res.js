"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conflict = exports.notImplemented = exports.internalServerError = exports.gone = exports.notFound = exports.forbidden = exports.unAuthorized = exports.badRequest = exports.partialContent = exports.resetContent = exports.noContent = exports.nonAuthoritativeInformation = exports.accepted = exports.created = exports.ok = exports.processing = exports.switchProtocol = exports.constinue = void 0;

var constinue = function constinue(res, data) {
  res.status(100).json({
    status: 100,
    message: "Tanggapan sementara ini menunjukkan bahwa segala sesuatu sejauh ini adalah OK dan bahwa klien harus melanjutkan dengan permintaan atau mengabaikannya jika sudah selesai.",
    data: data
  });
};

exports.constinue = constinue;

var switchProtocol = function switchProtocol(res, data) {
  res.status(101).json({
    status: 101,
    message: "Kode ini dikirim sebagai tanggapan ke header permintaan Upgrade oleh klien, dan menunjukkan protokol yang digunakan oleh server.",
    data: data
  });
};

exports.switchProtocol = switchProtocol;

var processing = function processing(res, data) {
  res.status(102).json({
    status: 102,
    message: "Kode ini menunjukkan bahwa server telah menerima dan memproses permintaan, tetapi belum ada respons.",
    data: data
  });
};

exports.processing = processing;

var ok = function ok(res, data) {
  res.status(200).json({
    status: 200,
    message: "Permintaan telah berhasil.",
    data: data
  });
};

exports.ok = ok;

var created = function created(res, data) {
  res.status(201).json({
    status: 201,
    message: "Permintaan berhasil dan sumber daya baru telah dibuat sebagai hasilnya. Ini biasanya merupakan respons yang dikirim setelah permintaan PUT.",
    data: data
  });
};

exports.created = created;

var accepted = function accepted(res, data) {
  res.status(202).json({
    status: 202,
    message: "Permintaan telah diterima tetapi belum ditindaklanjuti. Ini non-komitmen, artinya tidak ada cara di HTTP untuk kemudian mengirim respons asinkron yang menunjukkan hasil pemrosesan permintaan. Ini ditujukan untuk kasus di mana proses atau server lain menangani permintaan, atau untuk pemrosesan batch.",
    data: data
  });
};

exports.accepted = accepted;

var nonAuthoritativeInformation = function nonAuthoritativeInformation(res, data) {
  res.status(203).json({
    status: 203,
    message: "Kode respons ini berarti kumpulan informasi meta yang dikembalikan tidak disetel persis seperti yang tersedia dari server asal, tetapi dikumpulkan dari salinan lokal atau pihak ketiga. Kecuali kondisi ini, respons 200 OK lebih disukai daripada respons ini.",
    data: data
  });
};

exports.nonAuthoritativeInformation = nonAuthoritativeInformation;

var noContent = function noContent(res, data) {
  res.status(204).json({
    status: 204,
    message: "Tidak ada konten yang akan dikirim untuk permintaan ini, tetapi header mungkin berguna. Agen-pengguna dapat memperbarui header cache-nya untuk sumber daya ini dengan yang baru.",
    data: data
  });
};

exports.noContent = noContent;

var resetContent = function resetContent(res, data) {
  res.status(205).json({
    status: 205,
    message: "Kode tanggapan ini dikirim setelah menyelesaikan permintaan untuk memberi tahu agen pengguna tampilan ulang dokumen yang mengirim permintaan ini.",
    data: data
  });
};

exports.resetContent = resetContent;

var partialContent = function partialContent(res, data) {
  res.status(206).json({
    status: 206,
    message: "Kode respons ini digunakan karena header rentang dikirim oleh klien untuk memisahkan unduhan menjadi beberapa aliran.",
    data: data
  });
};

exports.partialContent = partialContent;

var badRequest = function badRequest(res, data) {
  res.status(400).json({
    status: 400,
    message: "Respons ini berarti server tidak dapat memahami permintaan karena sintaks yang tidak valid.",
    data: data
  });
};

exports.badRequest = badRequest;

var unAuthorized = function unAuthorized(res, data) {
  res.status(401).json({
    status: 401,
    message: "Otentikasi diperlukan untuk mendapatkan respon yang diminta. Ini mirip dengan 403, tetapi dalam kasus ini, otentikasi dimungkinkan.",
    data: data
  });
};

exports.unAuthorized = unAuthorized;

var forbidden = function forbidden(res, data) {
  res.status(403).json({
    status: 403,
    message: "Klien tidak memiliki hak akses ke konten sehingga server menolak untuk memberikan tanggapan yang tepat.",
    data: data
  });
};

exports.forbidden = forbidden;

var notFound = function notFound(res, data) {
  res.status(404).json({
    status: 404,
    message: "Server tidak dapat menemukan sumber daya yang diminta. Kode respon ini mungkin yang paling terkenal karena frekuensinya muncul di web.",
    data: data
  });
};

exports.notFound = notFound;

var gone = function gone(res, data) {
  res.status(410).json({
    status: 410,
    message: "Tanggapan ini akan dikirim ketika konten yang diminta telah dihapus dari server.",
    data: data
  });
};

exports.gone = gone;

var internalServerError = function internalServerError(res, data) {
  res.status(500).json({
    status: 500,
    message: "Server mengalami situasi yang tidak diketahui cara menanganinya.",
    data: data
  });
};

exports.internalServerError = internalServerError;

var notImplemented = function notImplemented(res, data) {
  res.status(501).json({
    status: 501,
    message: "Metode permintaan tidak didukung oleh server dan tidak dapat ditangani.",
    data: data
  });
};

exports.notImplemented = notImplemented;

var conflict = function conflict(res, data) {
  res.status(409).json({
    status: 409,
    message: "Kode status 409 (Konflik) menunjukkan bahwa permintaan tidak dapat diselesaikan karena konflik dengan status sumber daya target saat ini. Kode ini digunakan dalam situasi di mana pengguna mungkin dapat menyelesaikan konflik dan mengirim ulang permintaan.",
    data: data
  });
};

exports.conflict = conflict;