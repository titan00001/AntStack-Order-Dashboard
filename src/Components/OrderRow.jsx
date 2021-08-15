import sanitizeItem from "../Services/sanitizeItem";

function OrderRow(props) {

    const order = props.order;
    // console.log(order)

    return (
      <tr>
          {
              Object.keys(order).map((item, id) => {
                  if(!item.includes('items')) {
                    return <td className = "table-data" key = {id}>{order[item]}</td>
                  } else {
                    return <td className = "table-data" key = {id}>{sanitizeItem(order[item])}</td>
                  }
                  
              })
              
          }
      </tr>
      
    );
  }

export default OrderRow;