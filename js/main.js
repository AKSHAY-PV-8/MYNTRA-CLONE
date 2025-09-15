import { renderCards } from "./ui/Card.js"
import { renderMobileCard } from "./ui/mobile-card.js";




window.addEventListener('load', async() => {
    renderCards();
    renderMobileCard()
})