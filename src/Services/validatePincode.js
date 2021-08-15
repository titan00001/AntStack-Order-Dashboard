const validatePincode = (pincode) => {

    if(pincode === '') return pincode;
    
    if(! /^\d+$/.test(pincode)) {
        throw Error("Pincode is not a number")
    }

    else if(pincode.length > 6) {
        throw Error("Pincode exceeds 6 characters limit")
    }

    else if(pincode.length < 6) {
        throw Error("Pincode must have 6 digits")
    }

    else {
        return pincode;
    }
}

export default validatePincode