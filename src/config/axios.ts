import axios from "axios";
import config from "./config";
import { AxiosErrorHandler } from "@/util/error-handler";

const base = axios.create({
  baseURL: config.API_URL,
});

axios.interceptors.response.use((response) => response, AxiosErrorHandler);

export { base };
