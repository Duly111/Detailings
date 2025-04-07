import { Link,useLocation,useNavigate } from "react-router-dom";
import {useEffect,useState} from "react"
import { useProductFilter } from "./SearcheBarFuntionality";

export default function MarcetPage() {
  const { inputHandler, filteredProducts, inputText, filterByCategory,sliderValue,setSliderValue } = useProductFilter();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  

  const handleSliderValue = (e) =>{
    setSliderValue(e.target.value);
  }

  function clearFunction (){
    setSliderValue(0);
    
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      const categories = categoryParam.split(",");
      setSelectedCategories(categories);
      filterByCategory(categoryParam); 
    } else {
      setSelectedCategories([]);
      filterByCategory(""); 
    }
  }, [location.search]);

 

  const handleCategoryClick = (event, category) => {
    const checked = event.target.checked;
    const params = new URLSearchParams(location.search);

    let updatedCategories = [...selectedCategories];

    if (checked) {
      updatedCategories.push(category);
    } else {
      updatedCategories = updatedCategories.filter((c) => c !== category);
    }

    setSelectedCategories(updatedCategories);
    params.set("category", updatedCategories.join(","));

    navigate(`/marcet?${params.toString()}`);
  };

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
            <input type="range" min={0} max={1000} step={10} value={sliderValue} onChange={handleSliderValue}  className="slider" />
            <div className="price-label">
              <span>лв.0 - лв.{sliderValue}</span>
              <button className="clear-filter" onClick={() => {navigate("/marcet"),setSliderValue(0)}}>Премахни Филтър</button>
            </div>
          </div>
          <h3>Категории</h3>
          <ul className="categories">
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"аксесоари")} /> аксесоари
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"керамични покрития, вакси и сийланти")} /> керамични покрития, вакси и сийланти
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"детайлинг оборудване")} /> детайлинг оборудване
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"промо пакет")} /> промо пакет
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e, "интериор")} /> интериор
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"екстериор")} /> екстериор
            </li>
            <li>
              <input type="checkbox" onChange={(e) => handleCategoryClick(e,"полиращи пасти и падове")} /> полиращи пасти и падове
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
          </div>
          <div className="results-info">
            <p>Показване на 1-9 от {filteredProducts.length} резултата</p>
          </div>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className="product-item">
                  <img src={product.image} alt={product.title} />
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
