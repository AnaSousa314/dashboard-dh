
import './App.css';
import Content from './components/Content';
import Dash from './components/Dash';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <div className="App">
        <Dash />
        <main>
          <Header/>
          <Content/>
          <Footer/>
        </main>
    </div>
    </>
  );
}

export default App;
