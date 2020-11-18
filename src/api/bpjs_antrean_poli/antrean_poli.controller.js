import { verifyToken } from "../../config/jwt.config";
import { badRequest, internalServerError, ok, unAuthorized, created } from "../../res/http.res";
import Joi from "@hapi/joi";
import poli from "../../../poli.json";
import _, { result } from "lodash";
import { uniqueNamesGenerator, adjectives, colors, names } from "unique-names-generator";
import { getBPJSPatientUseNoKartu } from "../../config/bpjs.config";
import moment from "moment";
import AntreanPoli from "./antrean_poli.model";

export const antreanPoli = (req, res) => {
  const match = verifyToken(req.header("x-token"));

  if (match.payload) {
    const schema = Joi.object().keys({
      nomorkartu: Joi.string().required(),
      nik: Joi.string(),
      notelp: Joi.string(),
      tanggalperiksa: Joi.string().required(),
      kodepoli: Joi.string().required(),
      nomorreferensi: Joi.string().required(),
      jenisreferensi: Joi.number().required(),
      jenisrequest: Joi.number().required(),
      polieksekutif: Joi.number().required(),
    });

    Joi.validate(req.body, schema, async (error, result) => {
      if (error) {
        badRequest(res, error);
      } else {
        const {
          nomorkartu,
          nik,
          notelp,
          tanggalperiksa,
          kodepoli,
          nomorreferensi,
          jenisreferensi,
          jenisrequest,
          polieksekutif,
        } = result;

        const _estimasidilayani = await moment(`${tanggalperiksa} 00:00:00`, "YYYY-MM-DD hh:mm:ss").format(
          "x"
        );
        const _datapengguna = await getBPJSPatientUseNoKartu(nomorkartu);
        const _kodebooking = await uniqueNamesGenerator({
          dictionaries: [colors, adjectives, names],
          length: 3,
          style: "upperCase",
        });
        const _namapoli = await _.find(poli, { kdpoli: kodepoli });
        const base = await AntreanPoli.findOne(
          { kodepoli: kodepoli, tanggalperiksa: tanggalperiksa },
          {},
          { sort: { createAt: -1 } }
        );
        const _nomerantrean = base
          ? `${_namapoli.nmpoli.substr(0, 3).toUpperCase()}${
              parseInt(base.nomorantrean.replace(/^\D+/g, "")) + 1
            }`
          : `${_namapoli.nmpoli.substr(0, 3).toUpperCase()}${1}`;

        const antrean = {
          nomorkartu: nomorkartu,
          nama: _datapengguna.peserta.nama,
          norm: _datapengguna.peserta.mr.noMR || "",
          nik: nik || "",
          notelp: notelp || "",
          tanggalperiksa: tanggalperiksa,
          kodepoli: kodepoli,
          namapoli: _namapoli.nmpoli || "",
          nomorreferensi: nomorreferensi,
          jenisreferensi: jenisreferensi,
          jenisrequest: jenisrequest,
          polieksekutif: polieksekutif,
          kodebooking: _kodebooking,
          nomorantrean: _nomerantrean,
          jenisantrean: 1,
          estimasidilayani: _estimasidilayani,
          namadokter: "D",
          dilayani: false,
          createAt: Date.now(),
          updateAt: Date.now(),
        };

        AntreanPoli.create(antrean, (error, result) => {
          if (error) {
            internalServerError(res, error);
          } else {
            res.status(200).json({
              response: {
                nomorantrean: _nomerantrean,
                kodebooking: _kodebooking,
                jenisantrean: 1,
                estimasidilayani: _estimasidilayani,
                namapoli: _namapoli.nmpoli || "",
                namadokter: "",
              },
              metadata: {
                message: "Ok",
                code: 200,
              },
            });
          }
        });
      }
    });
  } else {
    unAuthorized(res, "token kadaluwarsa");
  }
};

export const rekapAntrean = (req, res) => {
  const token = req.header("x-token");
  const match = verifyToken(token);
  if (match.payload) {
    const { tanggalperiksa, kodepoli, polieksekutif } = req.body;
    const schema = Joi.object().keys({
      tanggalperiksa: Joi.string(),
      kodepoli: Joi.string(),
      polieksekutif: Joi.string(),
    });
    Joi.validate(req.body, schema, async (error, result) => {
      if (error) {
        badRequest(res, error);
      } else {
        const { nmpoli } = await _.find(poli, { kdpoli: kodepoli });

        const _antrean = await AntreanPoli.find(req.body);
        const _totalantrean = _antrean.length;
        const _jumlahterlayani = await _.filter(_antrean, { dilayani: true }).length;

        const _response = {
          response: {
            namapoli: nmpoli,
            totalantrean: _totalantrean,
            jumlahterlayani: _jumlahterlayani,
          },
          metadata: {
            message: "Ok",
            code: 200,
          },
        };
        res.status(200).json(_response);
      }
    });
  } else {
    unAuthorized(res, "token kadaluwarsa");
  }
};

// {
//   "tanggalperiksa": "2019-12-11",
//   "kodepoli": "001",
//   "polieksekutif": 0
// }

// {
//   "response": {
//       "namapoli" : "Poli Jantung"
//       "totalantrean" : 100,
//       "jumlahterlayani" : 46,
//       "lastupdate" : 1576040301000
//   },
//   "metadata": {
//       "message": "Ok",
//       "code": 200
//   }
// }

// {
//   "peserta": {
//       "cob": {
//           "nmAsuransi": null,
//           "noAsuransi": null,
//           "tglTAT": null,
//           "tglTMT": null
//       },
//       "hakKelas": {
//           "keterangan": "KELAS I",
//           "kode": "1"
//       },
//       "informasi": {
//           "dinsos": null,
//           "noSKTM": null,
//           "prolanisPRB": null
//       },
//       "jenisPeserta": {
//           "keterangan": "PNS DAERAH",
//           "kode": "3"
//       },
//       "mr": {
//           "noMR": "1915",
//           "noTelepon": "081215045701"
//       },
//       "nama": "AHYANI ",
//       "nik": null,
//       "noKartu": "0000086894976",
//       "pisa": "2",
//       "provUmum": {
//           "kdProvider": "1121U031",
//           "nmProvider": "DR. RATRI S. LINA"
//       },
//       "sex": "L",
//       "statusPeserta": {
//           "keterangan": "AKTIF",
//           "kode": "0"
//       },
//       "tglCetakKartu": "2020-06-10",
//       "tglLahir": "1974-10-13",
//       "tglTAT": "2033-07-11",
//       "tglTMT": "2006-09-06",
//       "umur": {
//           "umurSaatPelayanan": "45 tahun ,8 bulan ,3 hari",
//           "umurSekarang": "46 tahun ,1 bulan ,4 hari"
//       }
//   }

// {
//   "nomorkartu": "0000000000123",
//   "nik": "3506141308950002",
//   "notelp": "081123456778",
//   "tanggalperiksa": "2019-12-11",
//   "kodepoli": "001",
//   "nomorreferensi": "0001R0040116A000001",
//   "jenisreferensi": 1,
//   "jenisrequest": 2,
//   "polieksekutif": 0
// }

// {
//   "response": {
//       "nomorantrean" : "A10",
//       "kodebooking" : "QWERTYUIO123",
//       "jenisantrean" : 2,
//       "estimasidilayani" : 1576040301000,
//       "namapoli" : "Poli Jantung",
//       "namadokter" : ""
//   },
//   "metadata": {
//       "message": "Ok",
//       "code": 200
//   }
// }
