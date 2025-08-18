import axios from "axios";

const API_BASE_URL = process.env.APP_BASE_URL || "http://localhost:5000";

const callApi = async ({
  method = "GET",
  url,
  data = {},
  params = {},
  headers = {},
}) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${url}`,
      data,
      params,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export default callApi;
