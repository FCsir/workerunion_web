import axios from "axios";

const workerUnionInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 50000,
});

console.log("--------", process.env.VUE_APP_API_URL, process.env);

workerUnionInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

workerUnionInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.error(error);
  }
);

export { workerUnionInstance };
