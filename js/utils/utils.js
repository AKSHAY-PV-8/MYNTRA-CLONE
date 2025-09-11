
export const fetchProducts = async () =>{
    try{
        const response = await fetch('/product-data.json');
        const data = await response.json();
        console.log("product data fetch successfully !!!");
        return data.products;
        
    }catch(error){
        console.log("error in fetching data !!!", error);
    }
}