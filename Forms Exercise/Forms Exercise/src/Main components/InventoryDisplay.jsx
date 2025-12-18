import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

import styles from './InventoryDisplay.module.css';

function InventoryDisplay({ inventory, onDelete }) {
    return (
        <div>
            <h2>Inventory</h2>
            
            {
                inventory.map((item) => (
                    <div 
                        key={item.id} 
                        className={styles.itemContainer}
                    >
                        <div>
                            <ItemCard 
                                name={item.name} 
                                quantity={item.quantity} 
                                purpose={item.purpose} 
                            />
                        </div>

                        <div>
                            <ItemAction 
                                itemId={item.id} 
                                onDelete={onDelete} 
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}


export default InventoryDisplay;