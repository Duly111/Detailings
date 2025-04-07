
import { useState, useEffect } from "react";

export const useProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [inputText, setInputText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sliderValue,setSliderValue] = useState(0); 

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "http://localhost:3030/jsonstore/advanced/articles/details"
                );
                const result = await response.json();
    
                const productsArray = Object.values(result);
    
                setProducts(productsArray);
                setFilteredProducts(productsArray);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter((product) =>
                product.category.split(",").map((c) => c.trim()).includes(selectedCategory)
            );
        }

        if (inputText) {
            filtered = filtered.filter((product) =>
                product.title.toLowerCase().includes(inputText)
            );
        }

        if(sliderValue > 0){
            filtered = filtered.filter((product)=>
                product.price <= sliderValue
            );
        }

        setFilteredProducts(filtered);
    }, [inputText, selectedCategory, products,sliderValue]);

    const inputHandler = (e) => {
        setInputText(e.target.value.toLowerCase());
    };

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if(sliderValue > 0){
            setSliderValue(sliderValue);   
        }
    };

    return { inputHandler, filteredProducts, inputText, filterByCategory,sliderValue,setSliderValue };
};

