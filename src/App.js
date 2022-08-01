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
  });

  const [{ resolution, width, height, showPoints }, setDimensions] = useState({
    resolution: 5,
    width: 500,
    height: 500,
    showPoints: false,
  });

  // const [boardElement, setBoardElement] = useState();

  // const boardEl = useCallback(
  //   () => (
  //     <AppSettings.Provider value={showPoints}>
  //       <Board
  //         resolution={resolution}
  //         width={width}
  //         height={height}
  //         color={color}
  //       />
  //     </AppSettings.Provider>
  //   ),
  //   [resolution, width, height, color, showPoints]
  // );

  useEffect(() => {
    if (color.primary === color.secondary) {
      setColor({
        primary: getComputedStyle(document.body).getPropertyValue(
          "--color-primary"
        ),
        secondary: getComputedStyle(document.body).getPropertyValue(
          "--color-secondary"
        ),
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
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
