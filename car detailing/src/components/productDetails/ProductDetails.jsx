import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  console.log(location);

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
    })();
  }, []);

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
          <div className="quantity-select">
            <label htmlFor="quantity">Количество</label>
            <select id="quantity">
              <option value="0.5l">0,5л</option>
              <option value="0.750l">0,750л</option>
            </select>
          </div>
          <p className="price-single">{product.price} лв.</p>
          <div className="add-to-cart">
            <input type="number" defaultValue={1} min={1} />
            <button >Добавяне в количката</button> {/*onClick={addIdOfProduct(productId)} */}
          </div>
        </div>
      </div>

      <div className="tab-container">
        <div className="tabs">
          <button
            className="tab-link active"
            onclick="openTab(event, 'description')"
          >
            Описание
          </button>
          <button
            className="tab-link"
            onclick="openTab(event, 'additional-info')"
          >
            Допълнителна информация
          </button>
          <button className="tab-link" onclick="openTab(event, 'reviews')">
            Отзиви (0)
          </button>
        </div>
        <div id="description" className="tab-content active">
          <ul>
            <li>
              <strong>Tire&amp;Wheel Cleaner</strong> – истински майстор на
              многозадачност; Безопасно и ефективно почиства всички видове
              джанти, гуми, калници и гумени елементи
            </li>
            <li>
              <strong>Deiron Man</strong> – продукт за ефективно обеззаразяване
              на джанти и автомобилна боя от метални примеси и прах от накладки
            </li>
            <li>
              <strong>Tire Dressing</strong> – най-младият от този пакет – ще
              осигури истинско, приятно покритие и защита на гуми, гумени и
              пластмасови елементи и автомобилни уплътнения
            </li>
          </ul>
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
