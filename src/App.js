import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [diesel, setDiesel] = useState(0);
  const [petrol, setPetrol] = useState(0);
  const DieselExpensiveCalc = (number) => {
    for (let i = 0; i < 400000000; i++) {
      number += 1;
    }
    return number;
  }
  const calculation = useMemo(() => DieselExpensiveCalc(diesel), [diesel])
  const handleDiesel = () => {
    setDiesel(diesel + 1)
  }

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "20px 0" }}>
        <p>Petrol Price: {petrol}</p>
        <button onClick={() => setPetrol(petrol + 1)}>Increment Petrol</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "20px 0" }}>
        <p>Diesel Price: {diesel}</p>
        <p>Diesel amount: {calculation}</p>
        <button onClick={handleDiesel}>Increment Diesel</button>
      </div>
    </div>
  );
}

export default App;
