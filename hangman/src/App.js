import logo from './logo.svg';
import './App.css';
import { Solution } from './components/solution';
import { Score } from './components/Score';
import { Letters } from './components/letters';

function App() {
  return (
    <div className="App">
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
