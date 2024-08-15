import Restaurant from "./Restaurant";
import Meal from "./Meal";

export default interface RestaurantDetail {
  restaurant: Restaurant;
  meals: Meal[];
}
