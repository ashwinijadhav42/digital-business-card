import axios from "axios";

const API_BASE = "http://localhost:8080/api/pricing";

// Get All Plans (Admin)
export const getAllPlans = () => {
  return axios.get(`${API_BASE}/allPlans`);
};

// Get Active Plans (User)
export const getActivePlans = () => {
  return axios.get(`${API_BASE}/activePlans`);
};

// Get Plan By ID
export const getPlanById = (id) => {
  return axios.get(`${API_BASE}/${id}`);
};

// Create Plan
export const createPlan = (data) => {
  return axios.post(`${API_BASE}/createNewPlan`, data);
};

// Update Plan
export const updatePlan = (id, data) => {
  return axios.put(`${API_BASE}/updatePlan/${id}`, data);
};

// Delete Plan
export const deletePlan = (id) => {
  return axios.delete(`${API_BASE}/deletePlan/${id}`);
};