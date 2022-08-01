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
        <header className="App-header">
          <h2>Marching Squares</h2>
          <a
            href="https://github.com/kbeloin/marching-squares"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Github logo."
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
            />
          </a>
        </header>

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
