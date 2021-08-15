const sanitizeItem = (item) => {

    let itemList = item.replaceAll(';', ' ').replaceAll(':', ': ');
    return itemList;
}

export default sanitizeItem;