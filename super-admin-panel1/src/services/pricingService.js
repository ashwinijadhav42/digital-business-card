import axios from "axios";

const API = "http://localhost:8080/api/pricing";

export const getAllFeatures = () =>
  axios.get("http://localhost:8080/api/features");

export const getAllPlans = () =>
  axios.get(`${API}/allPlans`);

export const getPlanById = (id) =>
  axios.get(`${API}/${id}`);

export const createPlan = (data) =>
  axios.post(`${API}/createNewPlan`, data);

export const updatePlan = (id, data) =>
  axios.put(`${API}/updatePlan/${id}`, data);
export const deletePlan = (id) =>   
  axios.delete(`${API}/deletePlan/${id}`);






