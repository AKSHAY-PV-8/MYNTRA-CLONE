


const colorOptions = document.querySelectorAll(".color-list input[type = 'checkbox']");

console.log(colorOptions)

export const colorFilterHandler = () => {

    colorOptions.forEach(option => {
        option.addEventListener("change", () => {
            let checkedOptions = Array.from(colorOptions).filter(color => color.checked).map(color => color.id);
            console.log(checkedOptions)
        })
    })
    
}