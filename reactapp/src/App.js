import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react app</h1>
        {/* <h3>is the child component */}
        {/* <Greet name="Bruce" heroName="Batman"><h3>BATMAN</h3></Greet>
        <Greet name="Clark" heroName="Superman"></Greet>
        <Greet name="Diana" heroName="Wonder Woman"></Greet>

        <GreetClass name="Bruce" heroName="Batman"></GreetClass> 
        <Message></Message>
        */}
        <Counter></Counter>
        <EventBind></EventBind>
      </header>
    </div>
  );
}

export default App;
