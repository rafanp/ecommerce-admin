import { api } from "./api";
import { v4 as uuidv4 } from "uuid";

export const createDatabase = async (service, data) => {
  const response = await api.post(`/${service}`, { ...data, id: uuidv4() });
  return response;
};

export const updateData = async (service, data) => {
  const response = await api.put(`/${service}`, { ...data });
  return response;
};

export const deleteData = (service, id) => {
  return api.delete(`/${service}`, { data: id });
};

export const getData = async (service) => {
  const response = await api.get(`/${service}`);
  return response;
};
