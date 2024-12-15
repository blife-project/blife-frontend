import config from "@/config/config";
import { AxiosError } from "axios";

export const AxiosErrorHandler = (error: AxiosError) => {
  if (config.ENVIRONMENT === "development") {
    console.error("Something Wrong", error);
  }
};
