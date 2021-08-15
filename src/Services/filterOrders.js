const filterOrders = (searchPincode, searchDate, orderList) => {

    if(searchDate['year'] !== '') {
        // console.log(searchDate)
        let date = `${searchDate['day']}/${searchDate['month']}/${searchDate['year']}`;

        orderList = orderList.filter((order) => {
            return order['orderDate'] === date;
        })
    }

    if(searchPincode !== '') {
        orderList = orderList.filter((order) => {
            return order['deliveryPincode'] === searchPincode;
        })
    }
    
    return orderList;

}

export default filterOrders