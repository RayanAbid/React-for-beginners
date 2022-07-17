import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";

// function Header() {
//   const str = "test";

//   return <p>{str}</p>;
// }

function App() {
  return (
    <div className="App">
      <Header name="Home 22" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HEllo everyone</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
