import styles from './ItemAction.module.css';

function ItemAction({ itemId, onDelete }) {
    return (
        <div>
            <button 
                className={styles.button}
                onClick={() => onDelete(itemId)}                
            >
                Delete Item
            </button>
        </div>
    );
}

export default ItemAction; 