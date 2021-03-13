import "./App.css";
import Nav from "./components/Nav";
import BudgetBody from "./components/BudgetBody";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Nav />
      <Container fixed>
        <BudgetBody />
      </Container>
    </>
  );
}

export default App;
