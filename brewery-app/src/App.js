import Header from "./components/Header";
import Container from "./Container.js";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DarkMode />
        <Container />
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
