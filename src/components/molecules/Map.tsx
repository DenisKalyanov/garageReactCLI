import "../../styles/molecules/Bonus.scss";
import "../../styles/molecules/Map.scss";
import Build from "../../assets/images/build.jpeg";

const Map: React.FC<any> = () => (
  <section className="map_wrapper" id="contacts">
    <h2 className="common-title map__tittle">
      <span className="orange-letter">М</span>ы находимся
    </h2>
    <p className="map__description">г. Брест, ул. Янки Купалы 100500</p>
    <div className="map_wrapper__content">
      <img src={Build} alt="" className="map__image" />
      <iframe
        title="Карта проезда"
        className="map__import"
        loading="lazy"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234ed107980401397621136bdd922696c516cedb8b9c0be4eb44cd8afba7f15&amp;source=constructor"
      />
    </div>
  </section>
);

export default Map;
