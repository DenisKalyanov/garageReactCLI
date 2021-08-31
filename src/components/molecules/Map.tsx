import "../../styles/molecules/Bonus.scss";
import "../../styles/molecules/Map.scss";


const Map: React.FC<any> = () => (
  <section className="map_wrapper" id="map">
    <h2 className="common-title map__tittle">
      <span className="orange-letter">М</span>ы находимся
    </h2>
    <p className="map__description">г. Брест, ул. Янки Купалы 100500</p>
    <iframe
      title="Карта проезда"
      className="map__import"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234ed107980401397621136bdd922696c516cedb8b9c0be4eb44cd8afba7f15&amp;source=constructor"
    />
  </section>
);

export default Map;
