import "../../styles/molecules/Bonus.scss";
import Kit from "../../assets/images/catalog/basic/YT-38791.png";

const bonuses = [
  { title: "Предохранители", img: Kit },
  { title: "Перчатки", img: Kit },
  { title: "Термоусадка", img: Kit },
  { title: "Наконечник ПВТ", img: Kit },
  { title: "Изолента", img: Kit },
];

const Bonus: React.FC = () => (
    <section className="bonus common-margin common__top-margin__wrapper">
      <div id="bonus" className="common__top-margin" />
      <h2 className="common-title">
        <span className="orange-letter">П</span>риятные бонусы
      </h2>
      <span className="bonus__description">
        Для более комфортной работы вы можете пользоваться следующими расходниками:
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
