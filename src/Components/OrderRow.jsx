function OrderRow(props) {

    const order = props.order;
    // console.log(orderList)

    return (
      <tr>
          {
              Object.keys(order).map((item, id) => {
                  return <td key = {id}>{order[item]}</td>
              })
              
          }
      </tr>
      
    );
  }

export default OrderRow;