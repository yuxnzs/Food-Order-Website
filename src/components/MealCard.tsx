import Meal from "../types/Meal";

interface MealCardProps {
  meal: Meal;
  onSelect: () => void;
}

const MealCard = ({ meal, onSelect }: MealCardProps) => {
  return (
    <div className="meal-card" onClick={onSelect}>
      {/* Meal info */}
      <div className="meal-info">
        <h2 className="meal-title">{meal.strMeal}</h2>
        <p className="meal-price">$ {meal.price}</p>
      </div>

      {/* Meal image */}
      <div className="meal-image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <button
          className="add-to-cart-button"
          // Stop the event from bubbling up to the parent
          // so that the parent's onClick event won't be triggered
          onClick={(e) => e.stopPropagation()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MealCard;
