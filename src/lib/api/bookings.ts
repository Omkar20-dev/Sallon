// src/lib/api/bookings.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const createBookingApi = async (data: any) => {
  const token = localStorage.getItem("token");

  return axios
    .post(`${API_BASE_URL}/bookings`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
