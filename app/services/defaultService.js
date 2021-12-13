import { api } from "./api";
import { v4 as uuidv4 } from "uuid";

export const createDatabase = async (service, data) => {
  const response = await api.post(`/${service}`, { ...data, id: uuidv4() });
  console.log("response :", response);
  return response;
};

export const updateData = async (service, data) => {
  const response = await api.put(`/${service}`, { ...data });
  console.log("response :", response);
  return response;
};

export const deleteData = async (service, data) => {
  console.log("service :", service);
  // const response = await api.delete(`/${service}`,);
  console.log("response :", response);
  return response;
};

export const getData = async (service) => {
  const response = await api.get(`/${service}`);
  console.log("response :", response);
  return response;
};
