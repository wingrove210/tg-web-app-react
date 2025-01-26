import './App.css';
import Header from './components/Header/Header'
function App() {

  return (
    <div className="App">
        <Header />
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
