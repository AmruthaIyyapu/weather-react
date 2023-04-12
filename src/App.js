import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        This project is{" "}
        <a
          href="https://github.com/AmruthaIyyapu/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced
        </a>
      </p>
    </div>
  );
}
