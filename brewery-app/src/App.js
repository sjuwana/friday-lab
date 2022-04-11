
import Header from './components/Header';
import Container from './Container.js';
import './App.css'

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
       <Container/>
     </main>
     {/* <Footer/> */}
    </div>
  );
}

export default App;