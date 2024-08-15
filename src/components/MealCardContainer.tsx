import Meal from "../types/Meal";
import MealCard from "./MealCard";

interface MealCardContainerProps {
  meals: Meal[];
  onMealSelect: (meal: Meal) => void;
}

const MealCardContainer = ({ meals, onMealSelect }: MealCardContainerProps) => {
  return (
    <div className="meal-card-container">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          onSelect={() => onMealSelect(meal)}
        />
      ))}
    </div>
  );
};

export default MealCardContainer;
