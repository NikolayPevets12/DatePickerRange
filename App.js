import './App.css';
import { DatePickerRange } from './DatePickerRange/DatePickerRange';
import { Wrapper } from './hoc/Wrapper';

const DatePickerRangeWrapped =Wrapper(DatePickerRange);

function App() {
  
  return (
    <div className="App">
      <DatePickerRangeWrapped isOpen={true} />
    </div>
  );
  }

export default App;
