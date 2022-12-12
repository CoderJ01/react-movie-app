import './App.css';

const App = ()  => {
  const name = 'John';
  const isNameShowing = false;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? 'John' : 'someone'}!</h1>
    </div>
  );
}

export default App;
