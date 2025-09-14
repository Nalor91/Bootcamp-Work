const items = [];

export const addItem = (item) => {
  items.push(item);
    console.log(`Item "${item}" added. Current items:`, items);
};

export const removeItem = (item) => {
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
        console.log(`Item "${item}" removed. Current items:`, items);
    } else {
        console.log(`Item "${item}" not found. Current items:`, items);
    }
};

export const listItems = () => {
    console.log("Current items:", items);
    return items;    
}