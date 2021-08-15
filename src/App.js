import React, { useState } from "react";
import Search from "./Components/PinCode";
import Date from "./Components/Date";
import Table from "./Components/Table";

import convert from "./Services/csvToJson";

import "./App.css";

function App() {
  const [orderData, setOrderData] = useState([]);
  const [searchPincode, setSearchPincode] = useState("");
  const [searchDate, setSearchDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const loadData = async (file) => {
    try {
      const reader = new FileReader();
      reader.onloadend = async (e) => {
        const text = e.target.result;
        // console.log(convert(text));
        setOrderData(convert(text));
      };
      reader.readAsText(file);
    } catch (err) {
      console.error(err.message);
      alert("Select a csv file with valid specification");
      setOrderData([]);
    }
    
  };

  const getDate = (date) => {
    setSearchDate(date);
  };

  const getPincode = (pincode) => {
    setSearchPincode(pincode);
  };

  return (
    <div className="App">
      <div className="header">
        <Date getDate={getDate} />
        <Search getPincode={getPincode} />
        <input
          type="file"
          accept=".csv"
          onChange={(e) => loadData(e.target.files[0])}
        />
      </div>
      <div className="body">
        {orderData.length !== 0 && (
          <Table
            orders={orderData}
            searchPincode={searchPincode}
            searchDate={searchDate}
          />
        )}
        {orderData.length === 0 && <p className="message">Choose CSV file</p>}
      </div>
    </div>
  );
}

export default App;
