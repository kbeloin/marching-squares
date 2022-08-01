import "./App.css";
import Board from "./components/Board";
import { Form } from "./components/Form";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [color, setColor] = useState({
    primary: getComputedStyle(document.body).getPropertyValue(
      "--color-primary"
    ),

    secondary: getComputedStyle(document.body).getPropertyValue(
      "--color-secondary"
    ),
    line: getComputedStyle(document.body).getPropertyValue("--color-line"),
  });

  const [{ resolution, width, height, showPoints }, setDimensions] = useState({
    resolution: 30,
    width: 500,
    height: 500,
    showPoints: true,
  });

  useEffect(() => {
    if (color.primary === color.secondary) {
      setColor({
        primary: getComputedStyle(document.body).getPropertyValue(
          "--color-primary"
        ),
        secondary: getComputedStyle(document.body).getPropertyValue(
          "--color-secondary"
        ),
        line: getComputedStyle(document.body).getPropertyValue("--color-line"),
      });
    }
  }, [color.primary, color.secondary]);

  return (
    <div className="App">
      <AppContext.Provider value={{ showPoints, resolution }}>
        <header className="App-header"></header>

        <Board width={width} height={height} color={color} />

        <Form
          resolution={resolution}
          setDimensions={setDimensions}
          showPoints={showPoints}
          width={width}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
