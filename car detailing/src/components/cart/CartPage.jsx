import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
    const fetchCartProducts = async () => {
      const products = await Promise.all(
        cartItems.map(async (item) => {
          const response = await fetch(
            `http://localhost:3030/jsonstore/advanced/articles/details/${item.productId}`
          );
          const productData = await response.json();
          return { ...productData, quantity: item.quantity };
        })
      );
      setCartProducts(products);
    };

    fetchCartProducts();
  }, [cartItems]);

  const handelRemove = (productId) => {    
    removeFromCart(productId);
  };

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
                {cartProducts.map((item) => {
                  if (!item._id) {
                    console.error("Product is missing an ID:", item);
                    return null;
                  }
                  return (
                    <tr key={item._id}>
                      <td className="product">
                      <button className="remove" onClick={() => handelRemove(item._id)}>✖</button>
                        <img src={item.image} alt={item.title} />
                        <Link to={`/product/${item._id}`}>{item.title}</Link>
                      </td>
                      <td>{item.price} лв.</td>
                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          className="quantity-input"
                          readOnly
                        />
                      </td>
                      <td>{(item.price * item.quantity).toFixed(2)} лв.</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Link to="/marcet" className="update-cart">Продължи пазаруването</Link>
          </div>
          <div className="cart-summary">
            <h3>Обща стойност</h3>
            <p>
              <strong>Общо</strong> <span>{cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)} лв.</span>
            </p>
            <p>
              <strong>Доставка</strong>
            </p>
            <p>Доставка с Еконт Експрес</p>
            <p>
              Изпращане до <span className="location">Sliven</span>
            </p>
            <a href="#" className="change-address">
              Промяна на адреса
            </a>
            <p>
              <strong>Общо</strong> <span>{cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)} лв.</span>
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
