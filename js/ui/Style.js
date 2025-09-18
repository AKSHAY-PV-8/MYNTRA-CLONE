export const styling = () => {


    //---functions calls----


    // rendering of filter option screen
    toggleFilterSection();
    //toggle down the sort option of desktop view
    toggleDown();
  


    //----function declarations-----

    function toggleFilterSection(){

        const filterOptionsSelector = document.querySelectorAll(".filter-panel__wrap");

        try{
            filterOptionsSelector.forEach(option => option.addEventListener("click", () => {
                let selectedOption = option.id;
                console.log(selectedOption)
                filterOptionScreenDisplay(selectedOption)
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
            optionContainer.addEventListener("click", (e) => {
                e.stopPropagation();

                if(option.style.display === "none" || option.style.display === ""){
                    option.style.display = "block";
                }
            });

            document.addEventListener("click", () =>{
                if(option.style.display === "block"){
                    option.style.display = "none";
                }
            })

        }catch(error){
            console.log("erroe in toggleDown function !!!", error);
        }
    }

}