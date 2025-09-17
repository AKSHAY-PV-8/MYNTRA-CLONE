export const styling = () => {


    //---functions calls----
    toggleDown();
    // checkBoxCheckStyle();


    //----function declarations-----

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

    // function checkBoxCheckStyle(){
    //     const checkBox = document.querySelectorAll(".checkbox__indicator");

    //     checkBox.forEach((checked) => {

    //         checked.addEventListener("click", () => {

    //             if( checked.style.background === ""){
    //                 checked.style.background = "#ff3f6c";
    //             }else if(checked.style.background === "rgb(255, 63, 108)"){
    //                 checked.style.background = "";
    //             }
    //         })
    //     })
    // }

    

}