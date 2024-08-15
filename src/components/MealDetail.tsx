import Meal from "../types/Meal";

interface MealDetailProps {
  meal: Meal;
  setSelectedMeal: (meal: Meal | null) => void;
}

const MealDetail = ({ meal, setSelectedMeal }: MealDetailProps) => {
  // Set to null to close the MealDetail
  const setSelectedMealToNull = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="meal-detail-container">
      {/* Filter to have a trasparent background and close the MealDetail */}
      <div className="filter" onClick={setSelectedMealToNull}></div>

      <div className="meal-detail">
        {/* Close button */}
        <div className="close-button" onClick={setSelectedMealToNull}>
          {/* HTML entity for X */}
          &#x2715;
        </div>

        {/* Meal image */}
        <img
          className="meal-image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        {/* Meal info */}
        <div className="meal-info">
          <h2 className="meal-name">{meal.strMeal}</h2>
          <p className="meal-price">$ {meal.price}</p>
        </div>

        {/* Add to cart button */}
        <button className="add-to-cart-button">🛒 Add to cart</button>
      </div>
    </div>
  );
};

export default MealDetail;
