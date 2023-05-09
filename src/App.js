import './App.css';
import BoardList from './components/BoardList';

function App() {

  const onclick = () => {
    console.log(1);
  }

  return (
    <div className="App">
      <BoardList

      ></BoardList>
    </div>
  );
}

export default App;
