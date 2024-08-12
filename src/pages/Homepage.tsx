import { useState, useEffect } from "react";
import { useAPI } from "../services/APIContext";
import Restaurant from "../types/Restaurant";
import RestaurantCategory from "../components/RestaurantCategory";

const Homepage = () => {
  const apiService = useAPI();

  const [categories, setCategories] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch all restaurants when page is loaded and extract all categories
  useEffect(() => {
    apiService
      .getAllRestaurants()
      .then((restaurants) => {
        setRestaurants(restaurants);
        // Use `Set` to get unique categories
        setCategories(
          Array.from(
            new Set(restaurants.map((restaurant) => restaurant.category))
          )
        );
      })
      .catch(() => {
        setErrorMessage("Failed to fetch restaurants");
      });
  }, [apiService]);

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <div className="homepage">
      {categories.map((category) => (
        <RestaurantCategory
          key={category}
          categoryName={category}
          restaurants={restaurants.filter(
            (restaurant) => restaurant.category === category
          )}
        />
      ))}
    </div>
  );
};

export default Homepage;
