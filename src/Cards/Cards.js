import { useState } from "react";
import { Card } from "../Card/Card";
import { throwNullOrUndefined } from "../utils";

function assertDimensionObject(numberOfCards) {
  return {
    width: `${100 / numberOfCards}%`,
    // height: `${100 / numberOfCards}%`,
  };
}

export function Cards({ cardsInfo, levelsDeep, recursionCount }) {
  function handleOnClick(selectedCard) {
    setCardsToShow(cardsToShow.filter((card) => card === selectedCard));
    console.log(selectedCard);
  }

  throwNullOrUndefined(cardsInfo, levelsDeep);
  const [cardsToShow, setCardsToShow] = useState(cardsInfo);
  const arrayOfCards = [];
  for (let i = 0; i < cardsInfo.length; i++) {
    const isCardSelected = cardsToShow.includes(cardsInfo[i]);
    arrayOfCards.push(
      <Card
        isHidden={!isCardSelected}
        onClickSelector={() => handleOnClick(cardsInfo[i])}
        text={cardsInfo[i]}
        key={i}
        styleDimensions={
          isCardSelected
            ? { width: "100%" }
            : assertDimensionObject(cardsInfo.length)
        }
        recursionCount={recursionCount - 1}
      />
    );
  }
  return arrayOfCards;
}
