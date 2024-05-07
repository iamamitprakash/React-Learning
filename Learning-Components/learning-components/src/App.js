import './App.css';
import DogTiles from './DogTiles';

function App() {
  return (
    <div>
      <h1 className="header">"Learning React Components!!!"</h1>
      <section className="puppy">
        <DogTiles />
        <DogTiles />
        <DogTiles />
        <DogTiles />
        <DogTiles />
        <DogTiles />
      </section>
    </div>
    
  );
}

export default App;
