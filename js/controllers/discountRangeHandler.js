import { copy, productData } from "../main.js";
import { renderCards } from "../ui/Card.js";



const discountRangeOptions = document.querySelectorAll(".brand-list input[type = 'radio']");


export const discountRangeHandler = () => {

    try{
        discountRangeOptions.forEach(option => {
            option.addEventListener("change", () =>{

                let selected = document.querySelector(".brand-list input[type = 'radio']:checked") ;
                let checkedOption = selected ? Number(selected.id) : null;
                console.log(checkedOption)
                
                if(!checkedOption){
                    productData.length = 0;
                    productData.push(...copy);
                    renderCards();
                }else{
                    let filteredProduct = copy.filter(product => Number(product.discountPercentage) >= checkedOption);
                    productData.length = 0;
                    productData.push(...filteredProduct);
                    renderCards();
                }
            })
        })

    }catch(error){
        console.log("error in discountOptionHandler !!!", error);
    }

}