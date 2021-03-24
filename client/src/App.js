import "./App.css";
import Nav from "./components/Nav";
import BudgetBody from "./components/BudgetBody";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <BudgetBody />
      </div>
    </>
  );
}

export default App;
