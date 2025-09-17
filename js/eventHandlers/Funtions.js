import { FilterHandler } from "../controllers/brandFilterController.js";
import { discountRangeHandler } from "../controllers/discountRangeHandler.js";
import { sortHandler } from "../controllers/sortFunctionControllers.js";



//----Handlers

export const funtctionHandler = () => {
    sortHandler();
    FilterHandler();
    discountRangeHandler();

}






