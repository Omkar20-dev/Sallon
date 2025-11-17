// src/lib/api/auth.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// Auto instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Helper → Attach Token
const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/* ------------------ AUTH ------------------ */

// Signup
export const signupApi = async (data: any) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

// Login
export const loginApi = async (data: any) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

// Verify OTP
export const verifyOtpApi = async (data: any) => {
  const res = await api.post("/auth/verify-otp", data);
  return res.data;
};

// Resend OTP
export const resendOtpApi = async (email: string) => {
  const res = await api.post("/auth/resend-otp", { email });
  return res.data;
};

/* ------------------ PROFILE ------------------ */

// Get Profile
export const getProfileApi = async () => {
  const res = await api.get("/profile", {
    headers: authHeader(),
  });
  return res.data; // returns { success, user }
};

// Update Profile
export const updateProfileApi = async (data: any) => {
  const res = await api.put("/profile", data, {
    headers: authHeader(),
  });
  return res.data; // returns { success, message, user }
};

/* ------------------ BOOKINGS ------------------ */

// Get My Bookings
export const getMyBookingsApi = async () => {
  const res = await api.get("/bookings/my", {
    headers: authHeader(),
  });
  return res.data; // returns { success, bookings }
};
