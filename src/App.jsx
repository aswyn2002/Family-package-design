import React, { useState } from 'react';
import Header from './components/Header';
import PackageDetails from './components/PackageDetails';
// import DatePicker from './components/DatePicker';
import './App.css';

const App = () => {
  const [total, setTotal] = useState(724);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <PackageDetails total={total} setTotal={setTotal} />
      </div>
    </div>
  );
};

export default App;
