import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "../services/APIContext";
import Meal from "../types/Meal";
import RestaurantDetail from "../types/RestaurantDetail";
import MealCardContainer from "../components/MealCardContainer";
import MealDetail from "../components/MealDetail";

const RestaurantDetails = () => {
  const apiService = useAPI();

  const { category, id } = useParams<{ category: string; id: string }>();
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetail | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // Track the selected meal
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  // Fetch restaurant details based on the category and id
  useEffect(() => {
    if (category && id) {
      apiService
        .getRestaurantDetails(category, id)
        .then((data) => {
          setRestaurantDetails(data);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, [apiService, category, id]);

  // Set the clicked meal for the meal detail
  const handleMealSelect = (meal: Meal) => {
    setSelectedMeal(meal);
  };

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <div className="restaurant-details">
      {restaurantDetails && (
        <>
          {/* Restaurant info bar */}
          <div className="restaurant-info">
            <h1 className="restaurant-name">
              {restaurantDetails.restaurant.name}
            </h1>
            <div className="restaurant-info-text">
              <p>{restaurantDetails.restaurant.rating}</p>
              <p>{restaurantDetails.restaurant.category}</p>
              <p>{restaurantDetails.restaurant.location}</p>
            </div>
          </div>

          {/* Restaurant image */}
          <div className="restaurant-image">
            <img src={restaurantDetails.restaurant.image} alt="Restaurant" />
          </div>

          {/* Menu */}
          <h2 className="meals-title">Meals</h2>
          <MealCardContainer
            meals={restaurantDetails.meals}
            onMealSelect={handleMealSelect}
          />

          {/* Meal detail */}
          {selectedMeal && (
            <MealDetail meal={selectedMeal} setSelectedMeal={setSelectedMeal} />
          )}
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
