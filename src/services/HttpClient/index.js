import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const handleErrorMessage = (err) => {
  if (err.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  } else if (err.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(err.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", err.message);
  }
  console.log(err.config);
};

export const Get = (url, config = {}) => {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => handleErrorMessage(err));
};
