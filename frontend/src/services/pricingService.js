import axios from "axios";

const API = "http://localhost:8080/api/pricing";

export const getAllPlans = () => axios.get(`${API}/allPlans`);

export const createPlan = (data) =>
  axios.post(`${API}/createNewPlan`, data);


export const updatePlan = (id, data) => {
  return axios.put(`${API}/updatePlan/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const deletePlan = (id) =>
  axios.delete(`${API}/deletePlan/${id}`);
