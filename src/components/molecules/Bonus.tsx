import React from "react";
import "../../styles/molecules/Bonus.scss";
import Kit from "../../assets/images/kit.png";

const Bonus: React.FC = (): JSX.Element => {
  const bonuses = [
    { title: "Набор предохранителей", img: Kit },
    { title: "Перчатки", img: Kit },
    { title: "Термоусадка", img: Kit },
    { title: "Наконечник ПВТ", img: Kit },
    { title: 'Табичка: "мешает машина" ', img: Kit },
    { title: "Изолента", img: Kit },
  ];

  return (
    <section className="bonus common-margin">
      <h2 className="common-title">
        <span className="orange-letter">П</span>риятные бонусы
      </h2>
      <span className="bonus__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        perferendis maxime beatae corrupti dignissimos.
      </span>
      <div className="bonus__wrapper">
        {bonuses.map((item) => (
          <div key={item.title} className="bonus__item">
            <img
              src={item.img}
              alt={item.title}
              className="bonus__item__image"
            />
            <p className="bonus__item__text" aria-hidden="false">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bonus;
