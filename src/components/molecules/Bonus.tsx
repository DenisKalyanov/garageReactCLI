import "../../styles/molecules/Bonus.scss";
import Kit from "../../assets/images/kit.png";

const bonuses = [
  { title: "Набор предохранителей", img: Kit },
  { title: "Перчатки", img: Kit },
  { title: "Термоусадка", img: Kit },
  { title: "Наконечник ПВТ", img: Kit },
  { title: 'Табличка: "мешает машина" ', img: Kit },
  { title: "Изолента", img: Kit },
];

const Bonus: React.FC = () => (
    <section className="bonus common-margin common__top-margin__wrapper">
      <div id="bonus" className="common__top-margin" />
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

export default Bonus;
