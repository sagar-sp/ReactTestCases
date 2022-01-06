import Greeting from './components/Greeting';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Async from './components/Async';
function App() {
  return (
    <div className='App'>
      <p>Learn React</p>
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
