import { FilterHandler } from "../controllers/brandFilterController.js";
import { discountRangeHandler } from "../controllers/discountRangeHandler.js";
import { priceSliderHandler } from "../controllers/priceSliderFilter.js";
import { sortHandler } from "../controllers/sortFunctionControllers.js";



//----Handlers

export const funtctionHandler = () => {
    sortHandler();
    FilterHandler();
    discountRangeHandler();
    priceSliderHandler();
}






