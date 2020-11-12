import axios from "axios";

axios
  .post("http://103.112.163.253:9090/webservice/authentication/login", {
    LOGIN: "fatih",
    PASSWORD: "simrsgos2",
  })
  .then((data) => {
    console.log(data.headers);
  });
