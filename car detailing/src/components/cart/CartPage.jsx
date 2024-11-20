import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    
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
                <tr>
                  <td className="product">
                    <span className="remove">✖</span>
                    <img src="https://neshevdetailing.bg/wp-content/uploads/2024/11/AntiFog-Glass_500ml_1000-300x300.jpg" alt="Product Image" />
                    <a href="#">
                        title
                    </a>
                  </td>
                  <td> price лв.</td>
                  <td>
                    <input type="number" defaultValue={1} min={1} className="quantity-input" />
                  </td>
                  <td> price  лв.</td>
                </tr>
                <tr>
                  <td className="product">
                    <span className="remove">✖</span>
                    <img src="product-image-2.png" alt="Product Image" />
                    <div className="product-name">
                        <a href="#">
                        Cleanlte AntiFog Glass+ – Препарат за стъкла против
                        запотяване
                        </a>
                        <p>Количество: 0,5л</p>
                    </div>
                  </td>
                  <td>13,20 лв.</td>
                  <td>
                    <input type="number" defaultValue={1} min={1} className="quantity-input"/>
                  </td>
                  <td>13,20 лв.</td>
                </tr>
              </tbody>
            </table>
            <Link to="/marcet" className="update-cart">Продължи пазаруването</Link>
          </div>
          <div className="cart-summary">
            <h3>Обща стойност</h3>
            <p>
              <strong>Общо</strong> <span>77,20 лв.</span>
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
              <strong>Общо</strong> <span>77,20 лв.</span>
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
            <span>ivailoradulov@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
