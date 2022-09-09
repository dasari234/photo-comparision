import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, PUT, POST, DELETE, PATCH, OPTIONS";

axios.interceptors.request.use(
  (request) => {
    request.config = {
      ...(request.config ?? {}),
      start: Date.now(),
    };

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const now = Date.now();
    console.info(
      `Api Call ${response.config.url} took ${
        now - response.config.config.start
      }ms`
    );
    return response;
  },
  (error) => {
    const errorMsg =
      error &&
      error.response &&
      error.response.data &&
      error.response.data.errors &&
      error.response.data.errors.length > 0 &&
      error.response.data.errors[0] &&
      error.response.data.errors[0].messages &&
      error.response.data.errors[0].messages.length > 0
        ? error.response.data.errors[0].messages[0]
        : error.response.data.message
        ? error.response.data.message
        : error.message;
    localStorage.setItem("errorMessage", errorMsg);
    return Promise.reject(errorMsg);
  }
);

export default axios;
