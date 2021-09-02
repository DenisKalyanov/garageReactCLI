import { useState, lazy, Suspense } from "react";
import Slider from "react-slick";
import { Switch, Route, Link } from "react-router-dom";
import { catalogItems, catalogList } from "../../static/catalog";
const CatalogItem = lazy(() => import("./CatalogItem"));

const Catalog = (): JSX.Element => {
  const [currentList, setCurrentList] = useState(catalogList.lifts);
  const [currentItem, setCurrentItem] = useState(catalogItems[0].section);
  const [isActive, setIsActive] = useState(1);

  const settings = {
    dots: false,
    speed: 500,
    className: "slider variable-width",
    variableWidth: true,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const changeCurrentItem = (item: any) => {
    setIsActive(item.id);
    setCurrentItem(item.section);
    switch (item.section) {
      case "lifts":
        setCurrentList(catalogList.lifts);
        break;
      case "pneumatics":
        setCurrentList(catalogList.pneumatic);
        break;
      case "tools":
        setCurrentList(catalogList.tools);
        break;
      default:
        setCurrentList(catalogList.lifts);
        break;
    }
  };

  return (
    <section className="common-margin">
      <h2 className="common-title">
        <span className="orange-letter">К</span>аталог
      </h2>
      <Slider {...settings}>
        {catalogItems.map(
          (item): JSX.Element => (
            <div
              key={item.id}
              className="main-catalog__menu__wrapper"
              aria-hidden="false"
            >
              <Link
                to={`/${item.section}`}
                type="button"
                className={`main-catalog__menu ${
                  isActive === item.id ? "main-catalog__menu__active" : null
                }`}
                onClick={() => changeCurrentItem(item)}
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </div>
          )
        )}
      </Slider>
      <Switch>
        <Route path={`/${currentItem}`}>
          <Suspense fallback={<p>Загрузка каталога...</p>}>
            <CatalogItem currentList={currentList} />
          </Suspense>
        </Route>
      </Switch>
    </section>
  );
};

export default Catalog;
