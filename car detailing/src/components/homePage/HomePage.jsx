import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate();

  const handleFilterClick = (event, category) => {
    event.preventDefault();
    navigate(`/marcet?category=${category}`);
  }

  return (
    <>
      <section className="guide">
        <div className="guide-title">
          <h2>Нашият център за авто детайлинг!</h2>
          <p>
            Превърнете своя автомобил в истински брилянт с нашите професионални
            услуги. Ние предлагаме най-високо качество на грижата за вашето
            превозно средство, за да ви осигурим перфектно чиста и бляскава
            кола.
          </p>
          <Link to="/marcet" className="find-guide">Към Магазина</Link>
        </div>
      </section>

      <div className="all-elements">
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://carwow-uk-wp-3.imgix.net/P90448165_highRes_bmw-ix-xdrive40-m-sp.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href="" 
              onClick={(e) => handleFilterClick(e,"интериор")}>
              Интериор
            </a>
          </div>
        </section>
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://www.nationaldispatch.com/wp-content/uploads/2018/04/Hand-wiping-a-car-with-polish.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href="">
              Екстериор
            </a>
          </div>
        </section>
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://shop.cardetaillab.ua/upload/brands/images/2023-09/651065169d2d52.68456362.jpg?width=500")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href="">
              Полиращи пасти и падове
            </a>
          </div>
        </section>
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://carinfo.bg/wp-content/uploads/2023/05/pasta-za-polirane-na-farove-5.webp")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href=""
              onClick={(e) => handleFilterClick(e,"аксесоари")}
            >
              Аксесоари
            </a>
          </div>
        </section>
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwXBP8YQjOj1XrzOwiKzvaAhBuGF9M3nrFw&usqp=CAU")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href="">
              Керамични покрития, вакси и сийлънти
            </a>
          </div>
        </section>
        <section
          className="marcet"
          style={{
            backgroundImage:
              'url("https://carwashbubbles.com/image/cache/catalog/products/Screenshot_20220317-194146_Instagram-300x300h.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div>
            <a className="interior" href="">
              Детайлинг оборудване
            </a>
          </div>
        </section>
      </div>

      <div className="contact-section">
        <h2 className="contacts-header">Нашите Данни За Контакт</h2>
        <div className="contact-details">
          <h2 className="contact-header">Контакти</h2>
          <div className="phone">
            <span />
            <span>0877307860</span>
          </div>
          <div className="email">
            <span />
            <span>ivailoradulov05@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
