import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Apple");
addItem("Banana");
addItem("Keyboard");
listItems();

removeItem("Keyboard");
listItems();