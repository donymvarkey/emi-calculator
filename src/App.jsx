import { Container } from "react-bootstrap";
import EmiForm from "./components/EmiForm";
import Header from "./components/Header";
import TagLine from "./components/TagLine";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="my-3">
        <TagLine />
        <EmiForm />
      </Container>
    </div>
  );
}

export default App;
