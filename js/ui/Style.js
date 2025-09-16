export const styling = () => {

    toggleDown();

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
                    option.style.display = "none"
                }
            })

        }catch(error){
            console.log("erroe in toggleDown function !!!", error)
        }
    }

}