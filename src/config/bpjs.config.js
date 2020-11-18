import axios from "axios";
import crypto from "crypto";

let consumer_id = "2881";
let secret_key = "4eOF876F80";
let base_url = "https://dvlp.bpjs-kesehatan.go.id";
let service_name = "vclaim-rest";
let timestamp = Math.floor(Date.now() / 1000);

const generateSignature = ({ consumer_id, timestamp, secret_key }) => {
  const hmac = crypto.createHmac("sha256", secret_key);
  hmac.update(`${consumer_id}&${timestamp}`);
  return hmac.digest("base64");
};

const headers = {
  "X-cons-id": consumer_id,
  "X-timestamp": timestamp,
  "X-signature": generateSignature({
    consumer_id,
    timestamp,
    secret_key,
  }),
};

export const getBPJSPatientUseNoKartu = async (nokartu) => {
  const response = await axios({
    method: "GET",
    url: `${base_url}/${service_name}/Peserta/nokartu/${nokartu}/tglSEP/2020-06-10`,
    headers,
  });
  return response.data.response;
};
export const getBPJSPatientUseNIK = async (NIK) => {
  const response = await axios({
    method: "GET",
    url: `${base_url}/${service_name}/Peserta/nik/${NIK}/tglSEP/2020-06-10`,
    headers,
  });
  console.log(response.data.response);
};
