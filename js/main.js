import { renderCards } from "./ui/Card.js"
import { fetchProducts } from "./utils/utils.js";




window.addEventListener('load', async() => {

    const products = await fetchProducts()

    renderCards(products);
})