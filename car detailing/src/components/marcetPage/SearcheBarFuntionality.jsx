import {useState,useEffect} from "react"

export const useProductFilter =() =>{
    const [products, setProducts] = useState([]);
    const [inputText, setInputText] = useState("");
    
    const  inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      }

      useEffect(() => {
        (async () => {
          try {
            const response = await fetch(
              "http://localhost:3030/jsonstore/advanced/articles/details"
            );
            const result = await response.json();
    
            const productsArray = Object.values(result);
    
            setProducts(productsArray);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        })();
      }, []);

    const filteredData = products.filter((product) =>{
        if (inputText === ""){
          return product;
        }else {
          return product.title.toLowerCase().includes(inputText);   
        }
      });

    return{inputHandler,filteredData,inputText,products}

}