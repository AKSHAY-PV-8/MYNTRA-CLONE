import { funtctionHandler } from "./eventHandlers/Funtions.js";
import { renderMobileCard } from "./ui/mobile-card.js";
import { styling } from "./ui/Style.js";
import { fetchProducts } from "./utils/utils.js";
import { renderCards } from "./ui/Card.js"


export let productData = [];
export let copy = [];


window.addEventListener('load', async() => {

    (async () => {
        let data = await fetchProducts();
        productData = [...data];
        copy = [...data];
        renderCards();
    })();
    renderMobileCard();
    
    styling();
    funtctionHandler();
})