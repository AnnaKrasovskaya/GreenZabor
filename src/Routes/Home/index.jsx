import { useState } from "react";
import { Helmet } from "react-helmet";

import NavMenu from "../../Components/NavMenu/index.jsx";
import MainBanner from "../../Components/MainBanner/index.jsx";
import AdvantagesList from "../../Components/AdvantagesList/index.jsx";
import WorksGrid from "../../Components/WorksGrid/index.jsx";
import CallbackForm from "../../Components/CallbackForm/index.jsx";
import ProductsType from "../../Components/ProductsType/index.jsx";
import Characteristics from "../../Components/Characteristics/index.jsx";
import Products from "../../Components/Products/index.jsx";
import Content from "../../Components/Content/index.jsx";

export default function Home() {
  const content = `<h1>Декоративный зелёный забор в Минске в виде травы и хвои</h1><p>Искусственный декоративный зелёный забор Green Mix в Минске. Искусственная трава и хвоя, используемые компанией «GreenZabor», изготавливаются из высококачественного ПВХ, что обеспечивает их долговечность и устойчивость к различным погодным условиям. Продукция представлена в рулонах, что значительно упрощает процесс монтажа. К тому же, заборы из искусственной травы или хвои не требуют особого ухода, что является большим преимуществом для занятых горожан. Особое внимание стоит уделить экологичности продукта. Использование искусственных материалов помогает снизить нагрузку на природные ресурсы, поскольку не требуется регулярное обновление живых растений. К тому же, искусственная трава и хвоя не вызывают аллергии, что делает их идеальным выбором для общественных и частных пространств. Компания «GreenZabor», осознавая тенденции, предлагает уникальное решение для создания натурально выглядящих зелёных заборов из искусственной травы и хвои из ПВХ.</p>`;
  return (
    <>
      <Helmet>
        <title>GreenZabor - Декоративные зеленые заборы в Минске</title>
        <meta
          name="description"
          content="Декоративные зеленые заборы из искусственной травы и хвои в Минске. Высокое качество, долговечность и простота монтажа. Закажите у GreenZabor - лидера в производстве искусственных зеленых заборов."
        />
      </Helmet>
      <MainBanner />
      <AdvantagesList />
      <Products />
      <ProductsType />
      <Characteristics />
      <WorksGrid />
      <CallbackForm />
      <section className="homepage-content">
        <div className="container">
          <Content content={content} />
        </div>
      </section>
    </>
  );
}
