// api/callApi.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // send cookies (refresh token)
});

const callApi = async ({ method = "GET", url, data, params, headers }) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "API Error";
    throw new Error(message);
  }
};

export default callApi;
