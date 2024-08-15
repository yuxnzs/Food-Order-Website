import Restaurant from "../types/Restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const RestaurantCard = ({ restaurant, onClick }: RestaurantCardProps) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      {/* Restaurant image */}
      <div className="restaurant-image-container">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>

      {/* Restaurant details */}
      <div className="restaurant-info">
        <span className="restaurant-name">{restaurant.name}</span>
        <div className="restaurant-info-text">
          <img src="dollar.png" alt="dollar" />
          <span className="restaurant-price">{restaurant.priceRange}</span>
          <span className="restaurant-location">{restaurant.location}</span>
          <div className="spacer"></div>
          <span className="restaurant-rating">{restaurant.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
