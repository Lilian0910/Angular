import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Refdemo from './components/Refdemo';
import ParentComp from './components/ParentComp';
import HookState from './components/HookState';
import { UserProvider } from './components/UserContext';
import ComponentF from './components/ComponentF';
import PostList from './components/PostList';
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
        
        <Counter></Counter>
        <EventBind></EventBind>
        <HookState></HookState>
        <UserProvider value="data from contect">
          <ComponentF></ComponentF>
        </UserProvider>
        */}
        
        <PostList></PostList>
      </header>
    </div>
  );
}

export default App;
