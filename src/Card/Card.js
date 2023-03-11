import { Cards } from "../Cards/Cards";
// import { SVG } from "../SVG/SVG";

export function Card({
  isHidden,
  onClickSelector,
  text,
  levelsDeep,
  styleDimensions,
  recursionCount,
}) {
  function handleOnClick(event) {
    event.target.classList.add("selected-card");
    event.target.classList.remove(".card");
  }
  return (
    <div
      hidden={isHidden}
      onClick={(handleOnClick, onClickSelector)}
      style={styleDimensions}
      className={`card ${recursionCount === undefined && "selected-card"}`}
    >
      {text && text}
      {/* <div className="top-half">
        Test
        <SVG />
      </div> */}
      <div className="bottom-half">
        {recursionCount !== 0 && (
          <Cards
            cardsInfo={["1", "2", "3", "4"]}
            levelsDeep={levelsDeep}
            recursionCount={recursionCount ?? levelsDeep}
          />
        )}
      </div>
    </div>
  );
}
