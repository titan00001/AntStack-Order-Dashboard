import React, { useState } from 'react';
import Search from './Components/PinCode';
import Date from './Components/Date';
import Table from './Components/Table';

import convert from './Services/csvToJson';

import './App.css';

function App() {

  const [orderData, setOrderData] = useState([]);
  const [searchPincode, setSearchPincode] = useState('');
  const [searchDate, setSearchDate] = useState({'day': '', 'month': '', 'year': ''});

  const loadData = async (file) => {
    const reader = new FileReader()
    reader.onloadend = async (e) => { 
        const text = e.target.result
        // console.log(convert(text));
        setOrderData(convert(text));
    };
    reader.readAsText(file);
  }

  const getDate = (date) => {
    setSearchDate(date);
  }

  const getPincode = (pincode) => {
    setSearchPincode(pincode);
  }


  return (
    <div className="App">
      <Date getDate = {getDate}/>
      <Search getPincode = {getPincode} />
      <input type="file" accept=".csv" onChange = {(e) => loadData(e.target.files[0])} />
      { orderData.length !== 0 && <Table orders = {orderData} searchPincode = {searchPincode} searchDate = {searchDate}/>}
      { orderData.length === 0 && <p>Load the table</p>}
      
    </div>
  );
}

export default App;
