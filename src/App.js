import './App.css';
import News from './News';

function App() {
  return (
    <div className="App">
      <div className='pageHead'>
        <h1>News Reader</h1>
        <h4>Welcome to todays headlines...</h4>
      </div>
      <News />
    </div>
  );
}

export default App;
