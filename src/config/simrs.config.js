import axios from "axios";

const login = async () => {
  try {
    const response = await axios.post("http://103.112.163.253:9191/webservice/authentication/login", {
      LOGIN: "fatih",
      PASSWORD: "simrsgos2",
    });
    if (response.status == 200) {
      return response.headers["set-cookie"][0];
    }
  } catch (error) {
    return 404;
  }
};

export default login;

("Cookie: username=admin; sid=Guest; PHPSESSID=9r5m12lpfri56h4p8hnaq1o3dq");
