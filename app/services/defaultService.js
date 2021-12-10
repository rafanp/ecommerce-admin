import { api } from "./api";
import { v4 as uuidv4 } from "uuid";

export const createDatabase = async (service, data) => {
  const response = await api.post(`/${service}`, { ...data, id: uuidv4() });
  console.log("response :", response);
  return response;
};
