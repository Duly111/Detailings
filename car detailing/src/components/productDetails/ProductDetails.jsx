import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import Comments from './Coments';

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [quantity,setQuantity] = useState(1);
  const { productId } = useParams();
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const{
    handleSubmit,
    handleInputChanges,
    submittedReviews,
    name,
    email,
    review} = Comments();


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
            Отзиви ({submittedReviews.length})
          </button>
        </div>
        <div id="description" className="tab-content active">
          <p className="pContent">{product.content}</p>
        </div>
        <div id="additional-info" className="tab-content">
          <p>Тук ще добавите допълнителна информация за продукта.</p>
        </div>
        <div id="reviews" className="tab-content">

          <form className="form-comments" onSubmit={handleSubmit}>
            {/* Customer review */}

            <div className="commentsContainer">
              {submittedReviews.map((review, index) => (
                <div className="comments">
                  <div key={index}> 
                    <div className="avatar">{review.name.charAt(0)}</div>
                    <div className="message-content">
                      <div className="message-header">
                        <strong>{review.name}</strong>
                        <span className="time">{review.timestamp}</span>
                      </div>
                      <p>{review.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* input section */}
            <div className="comments-inputs">
            <div className="text-section">
              <p>Вашият имейл адрес няма да бъде публикуван. Задължителните полета са отбелязани с 
                <span className="star">*</span>
              </p>
            </div>

            <div className="text-section">
                <p>Вашият отзив 
                  <span className="star">*</span>
                </p>
              </div>
              
              <textarea 
                className="comment-text"
                name="review"
                value={review}
                onChange={handleInputChanges}
                required
              />
              
              <div className="text-section">
                <p>Име
                  <span className="star">*</span>
                </p>
              </div>

              <input
               className="name-text"
               type="text"
               name="name"
               value={name}
               onChange={handleInputChanges}
               required
              />
              
              <div className="text-section">
                <p>Ймейл
                  <span className="star">*</span>
                </p>
              </div>
              
              
              <input
                className="email-text"
                type="email"
                placeholder="Имейл"
                name="email"
                value={email}
                onChange={handleInputChanges}
                required
              />

              
              <button className="btn-send">Изпращане</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

