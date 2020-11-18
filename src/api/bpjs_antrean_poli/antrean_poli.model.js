import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import uniqueValidator from "mongoose-unique-validator";
const { Schema, model } = mongoose;

const antreanPoliSchema = new Schema({
  nomorkartu: String,
  nama: String,
  norm: String,
  nik: String,
  notelp: String,
  tanggalperiksa: String,
  kodepoli: String,
  namapoli: String,
  nomorreferensi: String,
  jenisreferensi: String,
  jenisrequest: String,
  polieksekutif: String,
  kodebooking: String,
  nomorantrean: String,
  jenisantrean: String,
  estimasidilayani: String,
  namadokter: String,
  dilayani: Boolean,
  createAt: Date,
  updateAt: Date,
});

antreanPoliSchema.plugin(mongoosePaginate);
antreanPoliSchema.plugin(uniqueValidator);

export default model("AntreanPoli", antreanPoliSchema);
