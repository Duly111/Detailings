import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [quantity,setQuantity] = useState(1);
  const { productId } = useParams();
  const navigate = useNavigate();
  const {addToCart} = useCart();


  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${productId}`
      );

      if (response.statusText === "No Content") {
        navigate("/not-found");
        return;
      }
      
      const result = await response.json();
      setProduct(result);
      setQuantity(result.quantity);

    })();
  }, [productId,navigate]);

  const handleQuantityChange = (event) =>{
    const newQuantity = parseInt(event.target.value,10);
    if (!isNaN(newQuantity) && newQuantity >=1){
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () =>{
    addToCart(productId,quantity);
  };




    const openTab = (event, tabId) => {
    document.querySelectorAll(".tab-link").forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");
    document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
  };
  

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bug Off</title>
      <link rel="stylesheet" href="styles.css" />

      <div className="container">
        <div className="product">
          <img src={product.image} alt="Bug Off Spray" />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="price">14,00 лв. – 233,00 лв.</p>
          <p className="category">Категории: {product.category}</p>
          
          <p className="price-single">{product.price} лв.</p>
          <div className="add-to-cart">
            <input 
              type="number"
              min={1} 
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={handleAddToCart}>Добавяне в количката</button>
          </div>
        </div>
      </div>

      <div className="tab-container">
        <div className="tabs">
          <button
            className="tab-link active"
            onClick={(event) => openTab(event, "description")}
          >
            Описание
          </button>
          <button
            className="tab-link"
            onClick={(event) => openTab(event,'additional-info')}
          >
            Допълнителна информация
          </button>
          <button 
            className="tab-link" 
            onClick={(event) => openTab(event, 'reviews')}
          >
            Отзиви (0)
          </button>
        </div>
        <div id="description" className="tab-content active">
          <p className="pContent">{product.content}</p>
        </div>
        <div id="additional-info" className="tab-content">
          <p>Тук ще добавите допълнителна информация за продукта.</p>
        </div>
        <div id="reviews" className="tab-content">
          <p>Все още няма отзиви за този продукт.</p>
        </div>
      </div>
    </>
  );
}
