import React from 'react'
import BarChart from './Components/BarChart'
import './App.css';

function App() {

  const [stocks, setStocks] = React.useState({})
  return (
    <div className="App">
     <BarChart />
    </div>
  );
}

export default App;
