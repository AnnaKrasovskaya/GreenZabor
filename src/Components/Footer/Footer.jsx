import "./index.scss";
import phoneIcon from "./Img/phoneIcon.png";
import instagramIcon from "./Img/instagramIcon.png";
import locationIcon from "./Img/locationIcon.png";
import timeIcon from "./Img/timeIcon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">Green Zabor</div>
        <div className="wrapper">
          <div className="contacts">
            <div className="block">
              <div className="icon">
                <img src={phoneIcon} alt="" />
              </div>
              <div className="text">+375 (29) 688-09-90</div>
            </div>
            <div className="block">
              <div className="icon">
                <img src={locationIcon} alt="" />
              </div>
              <div className="text">
                г. Минск, ул. Железнодорожная, 37/1, офис 3
              </div>
            </div>
            <div className="block">
              <div className="icon">
                <img src={timeIcon} alt="" />
              </div>
              <div className="text">Ежедневно с 09:00 до 18:00</div>
            </div>
            <div className="block">
              <div className="icon">
                <img src={instagramIcon} alt="" />
              </div>
              <div className="text">
                <a href="https://www.instagram.com/greenzabor_by/">
                  @greenzabor.by
                </a>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="block">
              <Link to="/oplata-i-dostavka">Оплата и доставка</Link>
            </div>
            <div className="block">
              <Link to="/catalog">Каталог</Link>
            </div>
            <div className="block">
              <Link to="/about-us">О нас</Link>
            </div>
            <div className="block">
              <Link to="/contacts">Контакты</Link>
            </div>
          </div>
          <div className="copyright">
            © 2024-2025 Green Zabor — официальный интернет-магазин товаров
            Вашего сада. Все права защищены. Условия использования и политика
            конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  );
}
