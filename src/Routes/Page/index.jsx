import Content from "../../Components/Content/index.jsx";
import pages from "../../db/pages.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../../Components/Products/index.jsx";
import { Helmet } from "react-helmet";
import CallbackForm from "../../Components/CallbackForm/index.jsx";
import AdvantagesList from "../../Components/AdvantagesList/index.jsx";
export default function Page() {
  const [currentPage, setCurrentPage] = useState({});
  const { page } = useParams();

  useEffect(() => {
    const searchedPage = pages.find((p) => p.slug === page);
    if (searchedPage) {
      setCurrentPage(searchedPage);
    } else {
      setCurrentPage({
        title: "404",
        slug: "404",
        content: "<h1>404</h1><p>Ошибка такой страницы не существует!</p>",
        meta_title: "404 - Страница не найдена | GreenZabor",
        meta_description:
          "Запрашиваемая страница не найдена. Вернитесь на главную страницу GreenZabor.",
      });
    }
  }, [page]);

  return (
    <section className={"page"}>
      <Helmet>
        <title>{currentPage.meta_title || currentPage.title}</title>
        <meta name="description" content={currentPage.meta_description || ""} />
      </Helmet>
      <div className="container">
        {page === "catalog" && (
          <>
            <h1>Каталог товаров GreenZabor</h1>
            <Products />
            <AdvantagesList />
            <CallbackForm />
          </>
        )}
        <Content content={currentPage.content} />
        {page === "contacts" && <CallbackForm />}
      </div>
    </section>
  );
}
