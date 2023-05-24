//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Message from './components/Message';
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
     <Message messagecode="10" messagecontent="This is a message from props"/>
    </div>
  );
}

export default App;
