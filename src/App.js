
import './App.css';
import Content from './components/Content';
import Dash from './components/Dash';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Dash />
        <main>
          <Header/>
          <Content/>
        </main>
    </div>
  );
}

export default App;
