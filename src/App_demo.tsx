import { useState } from 'react';
import './App.css';
import Counter from './components/Demo_Counter';

const App = () => {
  const [countTitle, setTitle] = useState('Counter1');
  return (
    <div>
      <Counter initialValue={0} title={countTitle} />
      <Counter initialValue={10} title="Counter1" />
      <button
        onClick={() => {
          setTitle('Counter2');
        }}
      >
        Cambiar título
      </button>
    </div>
  );
};

export default App;
