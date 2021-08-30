import React, { useState, Suspense } from "react";
import Slider from "react-slick";
import Lift1 from "../../assets/images/lift1.png";
import Pneumo from "../../assets/images/pneumo.png";
import Kit from "../../assets/images/kit.png";

const CatalogItem = React.lazy(() => import("./CatalogItem"));

const catalogItems = [
  { title: "Подъемники", section: "lifts" },
  { title: "Пневмоинструмент", section: "pneumatics" },
  { title: "Инструмент", section: "tools" },
];

const list = {
  lifts: [
    {
      title: "Force 1",
      description: {
        firstTitle: "Подъем",
        firstDescription: "4 тонны",
        secondTitle: "Высота подъема",
        secondDescription: "1780мм",
      },
      image: Lift1,
    },
    {
      title: "Force 2",
      description: {
        firstTitle: "Подъем",
        firstDescription: "3 тонны",
        secondTitle: "Высота подъема",
        secondDescription: "1880мм",
      },
      image: Lift1,
    },
    {
      title: "Force 3",
      description: {
        firstTitle: "Подъем",
        firstDescription: "5 тонн",
        secondTitle: "Высота подъема",
        secondDescription: "1400мм",
      },
      image: Lift1,
    },
  ],
  pneumatic: [
    {
      title: "Pneumatic 1",
      description: {
        firstTitle: "Мощность",
        firstDescription: "700Н",
        secondTitle: "Вес",
        secondDescription: "2кг",
      },
      image: Pneumo,
    },
    {
      title: "Pneumatic 2",
      description: {
        firstTitle: "Мощность",
        firstDescription: "700Н",
        secondTitle: "Вес",
        secondDescription: "2кг",
      },
      image: Pneumo,
    },
    {
      title: "Pneumatic 3",
      description: {
        firstTitle: "Мощность",
        firstDescription: "700Н",
        secondTitle: "Вес",
        secondDescription: "2кг",
      },
      image: Pneumo,
    },
  ],
  tools: [
    {
      title: "Tool 1",
      description: {
        firstTitle: "Комплект",
        firstDescription: "100 шт.",
        secondTitle: "Магнитный",
        secondDescription: "Да",
      },
      image: Kit,
    },
    {
      title: "Tool 2",
      description: {
        firstTitle: "Комплект",
        firstDescription: "70 шт.",
        secondTitle: "Магнитный",
        secondDescription: "Нет",
      },
      image: Kit,
    },
    {
      title: "Tool 3",
      description: {
        firstTitle: "Комплект",
        firstDescription: "20 шт.",
        secondTitle: "Магнитный",
        secondDescription: "Да",
      },
      image: Kit,
    },
  ],
};

const Catalog = (): JSX.Element => {
  const [currentList, setCurrentList] = useState(list.lifts);

  const settings = {
    dots: false,
    speed: 500,
    className: "slider variable-width",
    variableWidth: true,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
  };

  const changeCurrentItem = (item: string) => {
    switch (item) {
      case "lifts":
        setCurrentList(list.lifts);
        break;
      case "pneumatics":
        setCurrentList(list.pneumatic);
        break;
      case "tools":
        setCurrentList(list.tools);
        break;
      default:
        setCurrentList(list.lifts);
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
              key={item.title}
              className="main-catalog__menu__wrapper"
              aria-hidden="false"
            >
              <button
                type="button"
                className="main-catalog__menu"
                onClick={() => changeCurrentItem(item.section)}
                aria-label={item.title}
                aria-hidden="false"
              >
                {item.title}
              </button>
            </div>
          )
        )}
      </Slider>
      <Suspense fallback={<p>Загрузка каталога...</p>}>
        <CatalogItem currentList={currentList} />
      </Suspense>
    </section>
  );
};

export default Catalog;
