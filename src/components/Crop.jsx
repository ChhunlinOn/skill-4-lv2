import axios from "axios";
import API_BASE_URL from "../config";

const API = axios.create({
  baseURL: `${API_BASE_URL}`,
});

const getCrops = async () => {
  try {
    const response = await API.get("/crops");
    return response.data;
  } catch (error) {
    console.error("Error fetching Crops:", error);
    throw error;
  }
};
