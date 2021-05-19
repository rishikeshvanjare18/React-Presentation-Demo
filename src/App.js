import logo from './logo.svg';
import './App.css';
import Demofun from './components/Demofun';
import DemoClass from './components/DemoClass';
import FormHandling from './components/FormHandling';

const App = () =>{
  return (
    <div className="App">
      {/* <Demofun name="rishikesh" surname="vanjare"/> */}
      {/* <DemoClass/> */}
      <FormHandling/>
    </div>   
  );
}

export default App;
