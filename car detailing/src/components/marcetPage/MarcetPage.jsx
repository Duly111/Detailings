import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useProductFilter} from './SearcheBarFuntionality'

export default function MarcetPage() {
  const {inputHandler,products,filteredData,inputText} = useProductFilter()
  
  return (
    <>
      <section className="guide-marcet">
        <div className="guide-title">
          <h2>Магазин</h2>
        </div>
      </section>

      <div className="marcet-section">
        {/* Filter Section */}
        <div className="filter-section">
          <h3>Ценови Диапазон</h3>
          <div className="price-range">
            <input
              type="range"
              min={0}
              max={100}
              defaultValue={0}
              className="slider"
            />
            <div className="price-label">
              <span>лв.0 - лв.0</span>
              <button className="clear-filter">Премахни Филтър</button>
            </div>
          </div>
          <h3>Категории</h3>
          <ul className="categories">
            <li>
              <input type="checkbox" /> аксесоари
            </li>
            <li>
              <input type="checkbox" /> керамични покрития, вакси и сийланти
            </li>
            <li>
              <input type="checkbox" /> детайлинг оборудване
            </li>
            <li>
              <input type="checkbox" /> промо пакет
            </li>
            <li>
              <input type="checkbox" /> интериор
            </li>
            <li>
              <input type="checkbox" /> екстериор
            </li>
            <li>
              <input type="checkbox" /> полиращи пасти и падове
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <section className="product-section">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Търси Продукти" 
              onChange={inputHandler}
              value={inputText} 
              />
            <select>
              <option value="">Всички Категории</option>
            </select>
          </div>
          <div className="results-info">
            <p>Показване на 1-9 от {products.length} резултата</p>
          </div>
          <div className="product-list">
            {filteredData.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className="product-item" >
                  <img src={product.image} alt="Belt Brush" />
                  <p className="category">{product.category}</p>
                  <h4>{product.title}</h4>
                  <div className="rating">☆☆☆☆☆ (0)</div>
                  <p className="price">{product.price} лв.</p>
                </div>
              </Link>
            ))}          
          </div>
        </section>
      </div>

      {/* Contact Section */}
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

