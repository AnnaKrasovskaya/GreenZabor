import "./index.scss";

export default function Products() {
  const products = [
    {
      name: "Декоративный зелёный забор Green mix трава H -0,5х10",
      img: "product-1.jpeg",
      chars: [
        { key: "Высота рулона", value: "0,5 м" },
        { key: "Длина рулона", value: "10 м" },
        { key: "Толщина проволоки", value: "1.6х2 (3,2) мм" },
        { key: "Диаметр рулона", value: "43 см" },
        { key: "Ячейка Green Mix", value: "40х40 мм" },
        { key: "Плотность цинка", value: "53-60 г/м2" },
        { key: "Трава-Хвоя", value: "ПBX c 100% УФ защитой" },
        { key: "Вид плетения", value: "Одинарный" },
        { key: "Гарантия", value: "60 месяцев" },
      ],
      price: 225,
    },
    {
      name: "Декоративный зелёный забор Green mix трава H -1,0х10",
      img: "product-1.jpeg",
      chars: [
        { key: "Высота рулона", value: "1.0 м" },
        { key: "Длина рулона", value: "10 м" },
        { key: "Толщина проволоки", value: "1.6х2 (3,2) мм" },
        { key: "Диаметр рулона", value: "43 см" },
        { key: "Ячейка Green Mix", value: "40х40 мм" },
        { key: "Плотность цинка", value: "53-60 г/м2" },
        { key: "Трава-Хвоя", value: "ПBX c 100% УФ защитой" },
        { key: "Вид плетения", value: "Одинарный" },
        { key: "Гарантия", value: "60 месяцев" },
      ],
      price: 450,
    },
    {
      name: "Декоративный зелёный забор Green mix трава H -1,5х10",
      img: "product-1.jpeg",
      chars: [
        { key: "Высота рулона", value: "1.5 м" },
        { key: "Длина рулона", value: "10 м" },
        { key: "Толщина проволоки", value: "1.6х2 (3,2) мм" },
        { key: "Диаметр рулона", value: "43 см" },
        { key: "Ячейка Green Mix", value: "40х40 мм" },
        { key: "Плотность цинка", value: "53-60 г/м2" },
        { key: "Трава-Хвоя", value: "ПBX c 100% УФ защитой" },
        { key: "Вид плетения", value: "Одинарный" },
        { key: "Гарантия", value: "60 месяцев" },
      ],
      price: 675,
    },
    {
      name: "Декоративный зелёный забор Green mix трава H -1,7х10",
      img: "product-1.jpeg",
      chars: [
        { key: "Высота рулона", value: "1.7 м" },
        { key: "Длина рулона", value: "10 м" },
        { key: "Толщина проволоки", value: "1.6х2 (3,2) мм" },
        { key: "Диаметр рулона", value: "43 см" },
        { key: "Ячейка Green Mix", value: "40х40 мм" },
        { key: "Плотность цинка", value: "53-60 г/м2" },
        { key: "Трава-Хвоя", value: "ПBX c 100% УФ защитой" },
        { key: "Вид плетения", value: "Одинарный" },
        { key: "Гарантия", value: "60 месяцев" },
      ],
      price: 765,
    },
    {
      name: "Декоративный зелёный забор Green mix трава H -2,0х10",
      img: "product-1.jpeg",
      chars: [
        { key: "Высота рулона", value: "1.2 м" },
        { key: "Длина рулона", value: "10 м" },
        { key: "Толщина проволоки", value: "1.6х2 (3,2) мм" },
        { key: "Диаметр рулона", value: "43 см" },
        { key: "Ячейка Green Mix", value: "40х40 мм" },
        { key: "Плотность цинка", value: "53-60 г/м2" },
        { key: "Трава-Хвоя", value: "ПBX c 100% УФ защитой" },
        { key: "Вид плетения", value: "Одинарный" },
        { key: "Гарантия", value: "60 месяцев" },
      ],
      price: 900,
    },
  ];
  return (
    <section className={"products"}>
      <div className="container">
        <div className="products__title">Каталог товаров</div>
        <div className="products__list">
          {products.map((item, index) => (
            <div className={"products__item"} key={index}>
              <img src={`/img/${item.img}`} height={180} alt="" />
              <div className="name">{item.name}</div>
              <div className="chars">
                {item.chars.map((char, key) => (
                  <div className={"char"} key={key}>
                    <span>{char.key}</span> <b>{char.value}</b>
                  </div>
                ))}
              </div>
              <div className="price">{item.price} BYN</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
