import axios from "@/http-interceptor";

export function getPhotos() {
    return axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .catch((error) => {
        console.error(error);
      });
  }