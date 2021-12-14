import "../../styles/molecules/Bonus.scss";
import "../../styles/molecules/Map.scss";
import Build from "../../assets/images/build.jpeg";

const Map: React.FC<any> = () => (
  <section className="map_wrapper" id="contacts">
    <h2 className="common-title map__tittle">
      <span className="orange-letter">М</span>ы находимся
    </h2>
    <p className="map__description">г. Брест, ул. Янки Купалы 102Бк94</p>
    <div className="map_wrapper__content">
      <img src={Build} alt="" className="map__image" />
      <iframe
        title="Карта проезда"
        className="map__import"
        loading="lazy"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2d35bf06d509ed2861cc9fdf75370d06c54e552e10983d862fe45a05337d1c7f&amp;source=constructor"
      />
    </div>
  </section>
);

export default Map;
