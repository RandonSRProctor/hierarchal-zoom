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
  function handleOnClick(index) {
    setSelectedCardIndex(index);
    console.log(index);
  }
  function handleOnClickCreator(key) {
    return () => {
      handleOnClick(key);
    };
  }
  throwNullOrUndefined(cardsInfo, levelsDeep);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const arrayOfCards = [];
  for (let i = 0; i < cardsInfo.length; i++) {
    arrayOfCards.push(
      <Card
        isHidden={selectedCardIndex === i}
        onClickSelector={handleOnClickCreator(i)}
        text={cardsInfo[i]}
        key={i}
        styleDimensions={assertDimensionObject(cardsInfo.length)}
        recursionCount={recursionCount - 1}
      />
    );
  }
  return arrayOfCards;
}
