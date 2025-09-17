import { brandFilterHandler } from "../controllers/brandFilterController.js";
import { colorFilterHandler } from "../controllers/colorFilterController.js";
import { sortHandler } from "../controllers/sortFunctionControllers.js";



//----Handlers

export const funtctionHandler = () => {
    sortHandler();
    brandFilterHandler();
    colorFilterHandler();
}






