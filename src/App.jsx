import "./App.scss";
import ROWS from "./rows.json";
import TypePad from "./TypePad.jsx";

function App() {
  
  
  return (
    <div className="flex-col">
      <TypePad />
      <div className="container">
        <div className="flex-col">
          {ROWS.map((row, index) => (
            <Row row={row} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ row }) {
  let cells = [];

  for (let char of row) {
    let text = char.toUpperCase(),
      variant = "base";

    if (char === "Space") {
      text = "";
      variant = "key-mega";
    } else if (char === "Backspace") {
      text = "delete";
      variant = "key-z bg-gray bottom-right";
    } else if (char === "Enter") {
      text = "return";
      variant = "key-w bg-red bottom-right";
    } else if (char === "Tab") {
      text = "tab";
      variant = "key-z bg-gray bottom-left";
    } else if (char === "CapsLock") {
      text = "caps";
      variant = "key-y bg-gray bottom-left";
    } else if (char === "LShift") {
      text = "shift";
      variant = "key-x bg-gray bottom-left";
    } else if (char === "RShift") {
      text = "shift";
      variant = "key-x bg-gray bottom-right";
    } else if (char === "LCtrl") {
      text = "ctrl";
      variant = "key-z bg-gray bottom-left";
    } else if (char === "RCtrl") {
      text = "ctrl";
      variant = "key-z bg-gray bottom-right";
    } else if (char === "LAlt") {
      text = "alt";
      variant = "key-z bg-gray bottom-left";
    } else if (char === "RAlt") {
      text = "alt";
      variant = "key-z bg-gray bottom-right";
    } else if (char === "LWin") {
      text = "opt";
      variant = "key-z bg-gray bottom-left";
    } else if (char === "RWin") {
      text = "opt";
      variant = "key-z bg-gray bottom-right";
    } else if (char === "\\") {
      variant = "base bg-gray";
    }

    cells.push(
      <div className={variant} key={char}>
        {text}
      </div>,
    );
  }
  return <div className="flex-row">{cells}</div>;
}

export default App;
