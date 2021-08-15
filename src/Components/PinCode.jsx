import { useState } from "react";
import validatePincode from "../Services/validatePincode";

function PinCode(props) {

  const [errMsg, setMsg] = useState('');

  const getPincode = (pincode) => {
    // console.log(pincode);
    try {
      pincode = validatePincode(pincode);
      props.getPincode(pincode)
      setMsg('');
    } catch (e) {
      // console.error(e.message);
      setMsg(e.message);
      props.getPincode('');
    }
    
  }

  

  return (
    <div>
      <label>PinCode</label>
      <input type="text" onChange = {(e) => getPincode(e.target.value)}/>
      {errMsg !== '' && <p>{errMsg}</p>}
    </div>
  );
}

export default PinCode