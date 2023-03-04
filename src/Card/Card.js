import { Cards } from "../Cards/Cards";
import { SVG } from "../SVG/SVG";

export function Card({ levelsDeep }) {
  return (
    <div className="card">
      <div className="top-half">
        <SVG />
      </div>
      <div className="bottom-half">
        {levelsDeep !== 0 && (
          <Cards numberOfCards={4} levelsDeep={levelsDeep} />
        )}
      </div>
    </div>
  );
}
