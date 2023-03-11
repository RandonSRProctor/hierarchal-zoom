import "./App.css";
import { Card } from "./Card/Card";

function App() {
  return (
    <div className="viewport-boundary">
      <div className="simulated-viewport">
        <div className="app-container">
          <Card levelsDeep={2} style={{ height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
