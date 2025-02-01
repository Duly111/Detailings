import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";


export default function Cart() {
  const { cartItems } = useCart();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const products = await Promise.all(
        cartItems.map(async (productId,quantity) => {
          const response = await fetch(
            `http://localhost:3030/jsonstore/advanced/articles/details/${productId}`
          );
           
          const product = await response.json();
          return { ...product, quantity: 1 };
        })
      );
      setCartProducts(products);
    };

    fetchCartProducts();
  }, [cartItems]);

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <div className="cart-items">
            <table>
              <thead>
                <tr>
                  <th>Продукт</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Общо</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="product">
                      <span className="remove">✖</span>
                      <img src={product.image} alt={product.title} />
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </td>
                    <td>{product.price} лв.</td>
                    <td>
                      <input 
                        type="number"
                        value={product.quantity}
                        min={1}
                        className="quantity-input"
                        readOnly/>
                    </td>
                    <td>{product.price} лв.</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/marcet" className="update-cart">Продължи пазаруването</Link>
          </div>
          <div className="cart-summary">
            <h3>Обща стойност</h3>
            <p>
              <strong>Общо</strong> <span>{cartProducts.reduce((acc, product) => acc + product.price * product.quantity,0)} лв.</span>
            </p>
            <p>
              <strong>Доставка</strong>
            </p>
            <p>Доставка с Еконт Експрес</p>
            <p>
              Изпращане до <span className="location">Sliven</span>.
            </p>
            <a href="#" className="change-address">
              Промяна на адреса
            </a>
            <p>
              <strong>Общо</strong> <span>{cartProducts.reduce((acc, product) => acc + product.price * product.quantity,0)} лв.</span>
            </p>
            <button className="checkout">Продължи към Плащане</button>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="contacts-header">Нашите Данни За Контакт</h2>
        <div className="contact-details">
          <h2 className="contact-header">Контакти</h2>
          <div className="phone">
            <span className="icon" />
            <span>0877307860</span>
          </div>
          <div className="email">
            <span className="icon" />
            <span>ivailoradulov05@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
