import { api } from "./api";
import { v4 as uuidv4 } from "uuid";

export const createDatabase = async (service, data) => {
  return await api.post(`/${service}`, { ...data, id: uuidv4() });
};

export const updateData = async (service, data) => {
  return await api.put(`/${service}`, { ...data });
};

export const deleteData = (service, id) => {
  return api.delete(`/${service}`, { data: id });
};

export const getData = async (service) => {
  return await api.get(`/${service}`);
};
