import "./index.scss";
import delivery from "./img/delivery.svg";
import checkIcon from "./img/checkIcon.png";
export default function AdvantagesList() {
  const advantages = [
    {
      icon: checkIcon,
      title: "Эстетика",
      description: `Наши заборы выглядят привлекательно и естественно, гармонично вписываются в ландшафтный дизайн`,
    },
    {
      icon: checkIcon,
      title: "Минимум ухода",
      description: `Искусственная трава не требует регулярного полива и стрижек, а значит Вы получаете экономию времени и ресурсов на обслуживание`,
    },
    {
      icon: checkIcon,
      title: "Долговечность",
      description: `Мы используем только качественные материалы. Наши заборы на 100% устойчивы к солнцу, дождю, снегу и сильному ветру`,
    },
    {
      icon: checkIcon,
      title: "Универсальность",
      description: `Можно устанавливать на любых поверхностях. Подходит для использования в разных условиях и адаптируется к любым дизайнерским решениям`,
    },
    {
      icon: checkIcon,
      title: "Установка",
      description: `Установка такого забора занимает очень мало времени, это наилучший вариант для быстрого улучшения эстетики участка`,
    },
    {
      icon: checkIcon,
      title: "Экономичность",
      description: `В долгосрочной перспективе забор из искусственной травы более экономичен, так как не требует затрат на обслуживание`,
    },
  ];
  return (
    <section className={"advantages"}>
      <div className="container">
        <div className="advantages__title">GreenZabor: 20 лет на рынке</div>
        <div className="advantages__list">
          {advantages.map((item, index) => (
            <div className={"advantages__item"} key={index}>
              <img height={83} width={83} src={item.icon} alt="" />
              <div className="wrap">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
