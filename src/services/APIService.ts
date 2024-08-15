import axios from "axios";
import Restaurant from "../types/Restaurant";
import RestaurantDetail from "../types/RestaurantDetail";

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

  // Fetch a restaurant details by category and id
  async getRestaurantDetails(
    category: string,
    id: string
  ): Promise<RestaurantDetail> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/restaurant/${category}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching restaurant:", error);
      throw error;
    }
  }
}

export default APIService;
