import { copy, productData } from "../main.js";
import { renderCards } from "../ui/Card.js";
import { currentMaxValue, currentMinValue, selectedMaxvalue, selectedMinvalue } from "./priceSliderFilter.js";


//-------filter-function------


export const FilterHandler = () => {

    const brandOptions = document.querySelectorAll(".brand-list input[type = 'checkbox']");
    console.log("checkboxes", brandOptions);

    try{
        brandOptions.forEach(brand =>{
            brand.addEventListener("change", () => {

                let checkedBrandOption = Array.from(brandOptions).filter(option => option.checked).map(option => option.id);
                console.log("checked BrandOption",checkedBrandOption);

                if(checkedBrandOption.length === 0){

                    if(selectedMinvalue > 0 || selectedMaxvalue > 0){

                        let products = copy.filter(product => {
                            return product.discountPrice <= currentMaxValue && product.discountPrice >= currentMinValue;
                            
                        });
                        productData.length = 0;
                        productData.push(...products);
                        renderCards();
                    }else{
                        productData.length = 0;
                        productData.push(...copy);
                        renderCards();
                    }
                    
                }else{
                       

                    let filteredProduct;

                    if(selectedMinvalue > 0 || selectedMaxvalue > 0){

                        console.log("fldskfjhdkgfj",selectedMinvalue);
                        let products = copy.filter(product => {
                            return product.discountPrice <= currentMaxValue && product.discountPrice >= currentMinValue;
                            
                        });
                        const brandSet = new Set(checkedBrandOption);
                        filteredProduct = products.filter(product => brandSet.has(product.brand) || brandSet.has(product.color) || brandSet.forEach(brand => product.discountPercentage >= brand));
                        productData.length = 0;
                        productData.push(...filteredProduct);
                        renderCards();
                    }else{
                        const brandSet = new Set(checkedBrandOption);
                        filteredProduct = copy.filter(product => brandSet.has(product.brand) || brandSet.has(product.color) || brandSet.forEach(brand => product.discountPercentage >= brand));
                        productData.length = 0;
                        productData.push(...filteredProduct);
                        renderCards();
                    }
                    
                }
            })
        })
    }catch(error){

        console.error("error in brandFilterHandler !!!", error);

    }
    
}


