import Counter from "../features/counter/Counter";
import Header from "../shared/components/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Counter />
      </main>
    </>
  );
}

export default App;
