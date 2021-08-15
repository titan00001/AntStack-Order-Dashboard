import { useState } from "react";

function Date(props) {

  const [date, setDate] = useState({'year': '', 'month': '', 'day': ''})

  const getDate = (date) => {

    if(date['year'] !== '') {
      const [y, m, d] = date.split('-');
      date = {'year': y, 'month': m, 'day': d};
    }
    
    setDate(date);
    props.getDate(date);
  }

  const resetDate = () => {
    getDate({'year': '', 'month': '', 'day': ''});
  }
  

  return (
    <div>
      <label>Date</label>
      <input type="date" onChange = {(e) => getDate(e.target.value)} value = {date['year'] ? `${date['year']}-${date['month']}-${date['day']}` : ''}/>
      <button onClick = {resetDate}>Reset Date</button>
    </div>
  );
}

export default Date;