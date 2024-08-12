import axios from "axios";
import Restaurant from "../types/Restaurant";

class APIService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL ?? "";
  }

  // Fetch all restaurants
  async getAllRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/restaurants`);
      return response.data;
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      throw error;
    }
  }
}

export default APIService;
