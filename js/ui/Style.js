export const styling = () => {

    //rendering of filter option screen
    toggleFilterSection();
    //toggle down the sort option of desktop view
    toggleDown();

    popupButtonHandler();
  
}

//----function declarations-----

function toggleFilterSection(){

    const filterOptionsSelector = document.querySelectorAll(".filter-panel__wrap");

    try{
        filterOptionsSelector.forEach(option => option.addEventListener("click", () => {
            let selectedOption = option.id;

            filterOptionsSelector.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            filterOptionScreenDisplay(selectedOption);
        }));
    }catch(error){
        console.error(error);
    }
}
   
function filterOptionScreenDisplay(option){

    try{
        const optionScreens = document.querySelectorAll(".filter__option-bar")
        optionScreens.forEach(screen => screen.style.display = "none");

        const sizeOptionScreen = document.querySelector(`.${option}`);
        if(sizeOptionScreen){
            sizeOptionScreen.style.display = "block";
        }else{
            console.log("this option is not finished !!!")
        }
    }catch(error){
        console.error("error in filter option rendering !!!", error);
    }
}

function toggleDown(){

    const option = document.getElementById("filter__options");
    const optionContainer = document.getElementById("filter-option__container");

    try{
        optionContainer.addEventListener("mouseenter", () => {

            option.style.display = "block";
            
        });

        optionContainer.addEventListener("mouseleave", () => {

            option.style.display = "none";
        })

    }catch(error){
        console.log("erroe in toggleDown function !!!", error);
    }
}

function popupButtonHandler() {

    const popupButtonSelector = document.querySelectorAll(".popup-button");
    const filterPopScreen = document.querySelector(".filter-popup__wrapper");
    const mainScreen = document.querySelector(".mobile-main__section");
    const sortPopScreen = document.querySelector(".sort-popup__wrapper");

    popupButtonSelector.forEach(button => button.addEventListener("click", () => {
        console.log(button.id);
        let selectedButton = button.id;

        popupButtonFuntion(selectedButton)

    }))


    function popupButtonFuntion(button){

        switch(button){
            case "close":
                filterPopScreen.style.display = "none";
                break;
            case "filter":
                filterPopScreen.style.display = "block";
                break;
            case "sort":
                filterPopScreen.style.display = "none";
                sortPopScreen.style.display = "block";
                break;
            default:
                console.log("orgin");
        }

    }

    mainScreen.addEventListener("click", () => {
        sortPopScreen.style.display = "none";
    })
 
}