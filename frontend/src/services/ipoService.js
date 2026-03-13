import api from "./api";

export async function getIpos() {
  const response = await api.get("/ipos");
  return response.data;
}

export async function getIpoById(id) {
  const response = await api.get(`/ipos/${id}`);
  return response.data;
}

export async function createIpo(payload) {
  const response = await api.post("/ipos", payload);
  return response.data;
}
