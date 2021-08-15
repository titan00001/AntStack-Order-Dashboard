import OrderRow from "./OrderRow";
import filterOrders from "../Services/filterOrders";
import titlePipe from "../Services/titlePipe";

function Table(props) {

    let orderList = props.orders;
    const headers = Object.keys(orderList[0])

    orderList = filterOrders(props.searchPincode, props.searchDate, orderList);

    return (
      <table className="order-table">
          
        <thead>
            <tr>
            {
                headers.map((header, id) => {
                    return <th className = "table-data table-head" key={id}>{titlePipe(header)}</th>
                })
            }
            </tr>
        </thead>

        <tbody>
            { orderList.map((orderItem, id) => <OrderRow key={id} order = {orderItem}/>) }
        </tbody>
          
      </table>
      
    );
  }

export default Table;