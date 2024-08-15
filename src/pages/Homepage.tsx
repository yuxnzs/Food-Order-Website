import { useState, useEffect, useRef } from "react";
import { useAPI } from "../services/APIContext";
import Navbar from "../components/Navbar";
import Restaurant from "../types/Restaurant";
import RestaurantCategory from "../components/RestaurantCategory";

const Homepage = () => {
  const apiService = useAPI();

  const [categories, setCategories] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Ref to scroll to the specific category section
  // Create a ref for each category
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  const scrollToCategory = (category: string) => {
    const element = categoryRefs.current[category];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <div className="homepage">
      <Navbar categories={categories} onCategoryClick={scrollToCategory} />
      {/* Add homepage-content div to make sure padding-top: 5.5rem; & margin-top: -5.5rem; works */}
      {/* Still don't know why need to add homepage-content div to work */}
      <div className="homepage-content">
        {categories.map((category) => (
          <div
            key={category}
            // Add ref to each category
            // el param is the ref object, in this case is the div element
            ref={(el) => (categoryRefs.current[category] = el)}
          >
            <RestaurantCategory
              categoryName={category}
              restaurants={restaurants.filter(
                (restaurant) => restaurant.category === category
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
