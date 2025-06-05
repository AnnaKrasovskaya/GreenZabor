import './index.scss'
import img1 from './img/zabor1.webp'
import img2 from './img/zabor2.jpg'
import img3 from './img/zabor3.webp'
import img4 from './img/zabor4.jpg'
import img5 from './img/zabor5.webp'
import img6 from './img/zabor6.jpg'
export default function WorksGrid() {
  const grid = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ]
  return (
    <section className={'works-grid'}>
      <div className="container">
        <div className="works-grid__title">
          Наши работы
        </div>
        <div className="works-grid__grid">
          {
            grid.map((item, index) => (
              <div className={'works-grid__item works-grid__item' + (index + 1)} key={index}>
                <img src={item} alt=""/>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}