type Props = {
  item: { title: string; link: string };
};

const BurgerMenuLink: React.FC<Props> = ({ item }: Props): JSX.Element => (
  <li className="burger-menu__item">
    <a href={item.link} className="burger-menu__link">
      {item.title}
    </a>
  </li>
);

export default BurgerMenuLink;
