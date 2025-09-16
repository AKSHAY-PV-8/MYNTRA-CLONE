import { copy, productData } from "../main.js";
import { renderCards } from "../ui/Card.js";


const options = document.querySelectorAll(".toggle-option__list li");
let optionClicked = ""

//Handler

export const sortHandler = async() => {
    
    options.forEach((option) => {
        option.addEventListener("click", () =>{    
            optionClicked = option.id;
    
            sortOptions(optionClicked);
            renderCards();
        });
    })
    
}

//function

export const sortOptions = () => {
    switch (optionClicked){
        case "LowToHigh":
            productData.sort((a,b) => {
                return a.discountPrice - b.discountPrice;
            })
            break;
        case "HighToLow":
            productData.sort((a,b) =>{
                return b.discountPrice - a.discountPrice;
            })
            break;
        case "Rating":
            productData.sort((a,b) =>{
                return b.rating - a.rating ;
            })
            break;
        case "Discount":
            productData.sort((a,b) => {
                return b.discountPercentage - a.discountPercentage;
            })
            break;
        case "Popularity":
            productData.sort((a,b) => {
                return b.ratingCount - a.ratingCount;
            })
            break;
        case "New":
            productData.sort((a,b) => {
                return b.createAt - a.createAt;
            })
        default:
            productData.length = 0;
            productData.push(...copy);
    }

}