import './index.scss'
import trava1 from './img/trava-1.jpg'
import trava2 from './img/trava-2.jpg'
import Characteristics from "../Characteristics/index.jsx";

export default function ProductsType() {
  const productTypes = [
    {
      img: trava1,
      title: `Green Mix - ТРАВА`,
      content: `Внешний вид ограждения в виде реалистичной густой травы получается при использовании просечки под 90 градусов и шириной листьев 3-4 мм, который используется цвет поливинилхлоридной пленки - салатовый с дополнительной структурой, УФ защита от ультрафиолета - 100%. Эксплуатируется в диапазоне температур от -30 ° С до + 50 ° С`
    },
    {
      img: trava2,
      title: `Green Mix - ХВОЯ`,
      content: `При изготовлении забор с декоративной хвои, используется косая порезка, с максимальной скруткой проволоки, с шириной листьев 1-2 мм и вплетенными двух цветов долговечной ПВХ пленки и изготовленной методом производства сетки рабицы, темно-зеленого и салатового, УФ защита от ультрафиолет - 100%, не горит, не разлагается. без запаха.`
    }
  ]
  return (
    <section className={'product-types'}>
      <div className="container">
        <div className="product-types__title">
          Виды просечки и плетения зеленого забора
        </div>
        <div className="product-types__list">
          {
            productTypes.map((item, index) => (
              <div className={'product-types__item'} key={index}>
                <img src={item.img} alt=""/>
                <div className="title">{item.title}</div>
                <div className="content">{item.content}</div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}