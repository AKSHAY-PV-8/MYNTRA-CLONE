
import { fetchProducts } from "../utils/utils.js";

const cardDisplayContainer = document.getElementById("card-display");

let cardsList = ``;

let dummyList = `<li class="result__li-dummy"></li>
                 <li class="result__li-dummy"></li>
                 <li class="result__li-dummy"></li>
                 <li class="result__li-dummy"></li>
                 <li class="result__li-dummy"></li>
                `

const desktopCards = async() => {

    const data = await fetchProducts();

    const producData = [...data];

    for(let productDetails of producData){

        let {
            brand,
            name,
            discountPrice,
            price,
            discountPercentage,
            newItem,
            waterMark,
            rating,
            ratingCount,
            source,
            src 
        } = productDetails;


        cardsList += `
            <li class="card-item__wrapper">
                <div class="product-rating__container">
                    <span class="rating">${rating}</span>
                    <span class="star-icon"></span>
                    <div class="product-rating__count">
                        <span class="product-rating__separator">|</span>
                        <span class="count">${ratingCount}</span>
                    </div>
                </div>

                ${waterMark === true ? `
                <div class="product__water-mark">AD</div>` : ""}
                <a href="" class="card__wrap">
                    <div class="img-section__wrapper">
                        <div class="img__section">
                            <picture draggable="false" class="img-responsive" style="width: 100%; height: 100%; display: block;">
                                <source srcset="${source}" type="image/webp">
                                <img draggable="false" src="${src}" class="img-responsive" alt="Red Tape RT Neo Classics' 96 Men's Casual Shoes" title="Red Tape RT Neo Classics' 96 Men's Casual Shoes" style="width: 100%; display: block;">
                            </picture>
                        </div>
                                                
                        ${newItem === true ? `
                        <div class="tag__section">
                            NEW
                        </div>`: ""}
                    </div>

                    <div class="product-details__section">
                        <h3 class="product-brand">${brand}</h3>
                        <h4 class="product-name">${name}</h4>
                        <div class="product-price">
                            <span>
                                <span class="product-discount__price">
                                    Rs. ${discountPrice}
                                </span>
                                <span class="product__price">
                                    Rs. ${price}
                                </span>
                            </span>
                            <span class="product-discount__percentage">
                                (${discountPercentage} OFF)
                            </span>
                        </div>
                    </div>
                </a>
            </li>
            ` 
    }
    return cardsList

}

export const renderCards = async() => {

    cardsList = ``;
    await desktopCards();

    cardDisplayContainer.innerHTML = `${cardsList}${dummyList}`

}



