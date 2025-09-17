import { copy, productData } from "../main.js";
import { renderCards } from "../ui/Card.js";


//-------Brand-filter-function------


export const brandFilterHandler = () => {

    const brandOptions = document.querySelectorAll(".brand-list input[type = 'checkbox']");
    console.log("checkboxes", brandOptions)

    try{
        brandOptions.forEach(brand =>{
            brand.addEventListener("change", () => {

                let checkedBrandOption = Array.from(brandOptions).filter(option => option.checked).map(option => option.id);

                if(checkedBrandOption.length === 0){
                    productData.length = 0;
                    productData.push(...copy);
                    renderCards()
                }else{

                    const brandSet = new Set(checkedBrandOption)
                    let filteredProduct = copy.filter(product => brandSet.has(product.brand));
                    productData.length = 0
                    productData.push(...filteredProduct);
                    renderCards();
                }
            })
        })
    }catch(error){
        console.error("error in brandFilterHandler !!!", error);
    }
    
}


