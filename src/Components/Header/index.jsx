import phoneIcon from "./img/phoneIcon.svg";
import timeWork from "./img/timeWork.svg";
import locationIcon from "./img/locationIcon.svg";
import "./index.scss";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerTop">
          <div className="block">
            <div className="icon">
              <img src={phoneIcon} alt="Image" />
            </div>
            <div className="text">+375 (29) 688-09-90</div>
          </div>
          <div className="block">
            <div className="icon">
              <img src={locationIcon} alt="Image" />
            </div>
            <div className="text">
              г. Минск, ул. Железнодорожная 37/1 офис 3
            </div>
          </div>
          <div className="block">
            <div className="icon">
              <img src={timeWork} alt="Image" />
            </div>
            <div className="text">Ежедневно с 09:00 до 18:00</div>
          </div>
        </div>
      </div>
    </header>
  );
}
