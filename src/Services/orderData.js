import convert from "./csvToJson";

const loadData = async (file) => {

    // file.preventDefault()
    const reader = new FileReader()
    reader.onloadend = async (e) => { 
        const text = e.target.result
        // console.log(convert(text));
        return convert(text);
    };
    reader.readAsText(file);
      
}

export default loadData;