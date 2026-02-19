import axios from "axios";

const API_BASE = "http://localhost:8080/api/templates";

// Get all
export const getCategories = () => {
  return axios.get(`${API_BASE}/getAllTemplates`);
};

// Delete
export const deleteCategory = (id) => {
  return axios.delete(`${API_BASE}/delete/${id}`);
};

// Get by ID
export const getCategoryById = (id) => {
  return axios.get(`${API_BASE}/getTemplateCategoryById/${id}`);
};

// Save (with image)
export const saveCategory = (formData) => {
  return axios.post(`${API_BASE}/saveTemplateCategory`, formData, {
    headers: {  "Content-Type": "multipart/form-data" },
  });
};

// Update (PATCH version recommended)
export const updateCategory = (id, formData) => {
  return axios.patch(
    `${API_BASE}/updateTemplateCategoryById/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};



export const getBlog = () => {
  return axios.get(`${API_BASE}/getAllBlogs`);
};

export const deleteBlog = (id) => {
  return axios.delete(`${API_BASE}/delete/${id}`);
};

export const getBlogById = (id) => {
  return axios.get(`${API_BASE}/getBlogById/${id}`);
};

export const saveBlog = (formData) => {
  return axios.post(`${API_BASE}/saveBlog`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};  

export const getAllPlans = () => { 
  return axios.get(`${API_BASE}/allPlans`);
};

export const createPlan = (data) => {
  return axios.post(`${API_BASE}/createNewPlan`, data);
};

export const updatePlan = (id, data) => {
  return axios.put(`${API_BASE}/updatePlan/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};  

export const deletePlan = (id) => {
  return axios.delete(`${API_BASE}/deletePlan/${id}`);
};
