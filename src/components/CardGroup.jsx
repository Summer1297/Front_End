import Card from "./Card";
import '../assets/css/CardGroup.css';
import CardImage1 from '../assets/images/myimages03.jpeg';
import CardImage2 from '../assets/images/myimages04.jpeg';
import CardImage3 from '../assets/images/myimages05.jpeg';

function CardGroup() {
  return (
    <>
      <ul className="cardGroup">
        <li key="1">
          <Card
            title="Mount Rainier"
            imageUrl={CardImage1}
            imageAlt=" Mount Rainier stands as an icon in the Washington landscape."
            description="14,410 feet above sea level, stands as an icon in the Washington."
          />
        </li>
        <li key="2">
          <Card
            title="Crater Lake"
            imageUrl={CardImage2}
            imageAlt="Crater Lake National Park"
            description="Native Americans witnessed its formation 7,700 years ago"
          />
        </li>
        <li key="3">
          <Card
            title="Western Gull"
            imageUrl={CardImage3}
            imageAlt="A Western Gull standing near the sea"
            description="Western Gulls are common along the Washington coast."
          />
        </li>
      </ul>
    </>
  );
}

export default CardGroup;
