import axios from "axios";

const API = "http://localhost:8080/api/features";

export const createFeature = (data) => {
  return axios.post(API, data);
};

export const getAllFeatures = () => {
  return axios.get(API);
};


// Delete Feature
export const deleteFeature = (id) =>
  axios.delete(`${API}/${id}`);


export const updateFeature = (id, data) =>
  axios.put(`${API}/${id}`, data);
