import { Get } from "./../services/HttpClient";

export const handleLoadUsers = async (config) => {
  return await Get("users", config);
};
