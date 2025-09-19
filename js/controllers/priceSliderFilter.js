import { copy, productData } from "../main.js";
import { renderCards } from "../ui/Card.js";



const slider = document.querySelector(".slider");
const range = document.querySelector(".slider-range");
const minThumb = document.getElementById("min-thumb");
const maxThumb = document.getElementById("max-thumb");
const priceText = document.querySelector(".slider-price");

const sliderWidth = slider.offsetWidth;
const maxPrice = 100000;

export let currentMinValue = 200;
export let currentMaxValue = 100000;

export let selectedMinvalue = 0;
export let selectedMaxvalue = 0;



// -------price-slider-handler-----

export const priceSliderHandler = () => {

    minThumb.addEventListener('mousedown', () => mouseDrag(minThumb, true));
    maxThumb.addEventListener('mousedown', () => mouseDrag(maxThumb, false));
    
}


// --------price-slider-functions-----


function setThumbPosition() {
    try{
        const minThumbChanged = (currentMinValue / maxPrice) * sliderWidth;
        const maxThumbChanged = (currentMaxValue / maxPrice) * sliderWidth;

        minThumb.style.left = minThumbChanged + 'px';
        maxThumb.style.left = maxThumbChanged + 'px';

        range.style.left = minThumbChanged + 'px';
        range.style.width = (maxThumbChanged - minThumbChanged) + 'px';

        priceText.textContent = `₹${currentMinValue} - ₹${currentMaxValue}`;


    }catch(error){
        console.error("error in priceSliderHandler !!!", error)
    }

}

function mouseDrag(thumb, isMin) {

    function mouseMove(e) {
        
        let sliderPosition = slider.getBoundingClientRect();
        let sliderPositionChanged = e.clientX - sliderPosition.left;

        if(sliderPositionChanged < 0) sliderPositionChanged = 0;
        if(sliderPositionChanged > sliderWidth) sliderPositionChanged = sliderWidth;

        let price = Math.round((sliderPositionChanged / sliderWidth) * maxPrice);

        if(isMin){
            if(price >= currentMaxValue) price = currentMaxValue - 100;
            currentMinValue = price;
        }else{
            if(price <= currentMinValue) price = currentMinValue + 100;
            currentMaxValue = price;
        }
        setThumbPosition();
    }

    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        console.log("min", currentMinValue);
        console.log("max", currentMaxValue);
        selectedMinvalue = currentMinValue;
        selectedMaxvalue = currentMaxValue;

        filteredProducts();
    }

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    
}

function filteredProducts() {
    let Products = copy.filter(product => {
        return product.discountPrice <= currentMaxValue && product.discountPrice >= currentMinValue
    });
    productData.length = 0;
    productData.push(...Products);
    renderCards();
}




