import {useState} from "react";

import styles from './SpacecraftBuilder.module.css';

import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder () 
{
    const [inventory, setInventory] = useState([]);

    function addItem(item) 
    {
        setInventory((prevInventory) => [...prevInventory, item]);
    }

    function deleteItem(id) 
    {
        setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>Spacecraft Builder Inventory</h1>

            <div className={styles.itemForm}>
                <ItemForm onItemSubmit={addItem} />
            </div>

            <div>
                <InventoryDisplay 
                    inventory={inventory} 
                    onDelete={deleteItem} 
                />
            </div>
        </div>
    );
}

export default SpacecraftBuilder;

