import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

// ---------- AUTH ----------
export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
export const getCurrentUser = () => api.get("/auth/me");

// ---------- LISTINGS ----------
export const fetchListings = () => api.get("/listings");
export const fetchListingById = (id) => api.get(`/listings/${id}`);
export const createListing = (data) => api.post("/listings", data);
export const removeListing = (id) => api.delete(`/listings/${id}`);

export default api;
