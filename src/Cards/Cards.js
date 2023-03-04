import { Card } from "../Card/Card";
import { nullCheck } from "../utils";

export function Cards({ numberOfCards, levelsDeep }) {
  nullCheck(numberOfCards, levelsDeep);

  const arrayOfCards = [];
  for (let i = 0; i < numberOfCards; i++) {
    arrayOfCards.push(<Card key={i} levelsDeep={levelsDeep - 1} />);
  }
  return arrayOfCards;
}
