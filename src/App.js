
import './App.css';
import ControlTimer from './components/ControlTimer';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import DynamicFetcher from './components/DynamicFetcher.';
import Logger from './components/Logger';
import Timer from './components/Timer';

function App() {
  return (
    <>
    <div>
    <Counter/>
        <Logger/>
      <DataFetcher/>
   <ControlTimer/>
   <DynamicFetcher/>
    </div>
     
    </>
  );
}

export default App;
