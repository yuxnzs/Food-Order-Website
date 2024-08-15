import Restaurant from "../types/Restaurant";
import RestaurantCard from "./RestaurantCard";

interface RestaurantCategoryProps {
  categoryName: string;
  restaurants: Restaurant[];
}

const RestaurantCategory = ({
  categoryName,
  restaurants,
}: RestaurantCategoryProps) => {
  // Open RestaurantDetails page
  const handleCardClick = (restaurant: Restaurant) => {
    // Use window.open to in a new tab
    window.open(`/restaurant/${categoryName}/${restaurant.id}`, "_blank");
  };

  return (
    <div className="restaurant-category">
      <h2 className="category-name">{categoryName}</h2>
      {/* Cards of restaurants in this category */}
      <div className="restaurant-cards-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleCardClick(restaurant)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
