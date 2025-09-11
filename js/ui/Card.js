const cardDisplayContainer = document.getElementById("card-display");


const desktopCards = () => {
    return                      `<li class="card-item__wrapper">
                                    <div></div>
                                    <div class="product-rating__container">
                                        <span class="rating">4.7</span>
                                        <span class="star-icon"></span>
                                        <div class="product-rating__count">
                                            <span class="product-rating__separator">|</span>
                                            <span class="count">16</span>
                                        </div>
                                    </div>

                                    <div class="product__water-mark">AD</div>

                                    <a href="" class="card__wrap">
                                        <div class="img-section__wrapper">
                                            <div class="img__section">
                                                <picture draggable="false" class="img-responsive" style="width: 100%; height: 100%; display: block;">
                                                    <source srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/23/FAjUm0RA_6b534ac659dd43d98aa01f3df42787d0.jpg" type="image/webp">
                                                    <img draggable="false" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/23/FAjUm0RA_6b534ac659dd43d98aa01f3df42787d0.jpg" class="img-responsive" alt="Red Tape RT Neo Classics' 96 Men's Casual Shoes" title="Red Tape RT Neo Classics' 96 Men's Casual Shoes" style="width: 100%; display: block;">
                                                </picture>
                                            </div>
                                            
                                            <div class="tag__section">
                                                NEW
                                            </div>
                                        </div>

                                        <div class="product-details__section">
                                            <h3 class="product-brand">Red Tape</h3>
                                            <h4 class="product-name">Men Textured Sneakers</h4>
                                            <h4 class="product-sizes">
                                                <span class="product-size__Inventory-present">
                                                    UK10
                                                </span>
                                            </h4>
                                            <div class="product-price">
                                                <span>
                                                    <span class="product-discount__price">
                                                        Rs. 1049
                                                    </span>
                                                    <span class="product__price">
                                                        Rs. 6999
                                                    </span>
                                                </span>
                                                <span class="product-discount__percentage">
                                                    (85% OFF)
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>`
}

export const renderCards = () => {
    cardDisplayContainer.innerHTML = desktopCards();
}



