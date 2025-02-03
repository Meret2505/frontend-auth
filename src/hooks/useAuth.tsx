import axios from "axios";

const API_URL = "https://backend-ashen-seven-22.vercel.app";

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 422) {
      // Handle weak password error
      throw new Error(
        "Password is too weak. Please enter a stronger password."
      );
    }
    if (error.response && error.response.status === 400) {
      // Handle weak password error
      throw new Error(
        "Invalid request. Please check your input and try again."
      );
    }
    // Handle other errors
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      // Handle weak password error
      throw new Error(
        "Invalid request. Please check your input and try again."
      );
    }
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const fetchProfile = async (token: string) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: token },
  });
};

export const saveToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const clearToken = () => {
  localStorage.removeItem("authToken");
};
