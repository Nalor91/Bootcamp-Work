import  {useState} from "react";

import styles from "./ItemForm.module.css";

function ItemForm({ onItemSubmit }) {
    const INITIAL_STATE = {
        name: "",
        quantity: "",
        purpose: "",
        agreeToTerms: false
    };

    const [data, setData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function validateForm() {
        let newFormErrors = {};

        if (!data.name) {
            newFormErrors.name = "Name is required.";
        }

        if (!data.quantity || isNaN(data.quantity) || Number(data.quantity) <= 0) {
            newFormErrors.quantity = "Quantity must be a positive number.";
        }

        if (!data.purpose) {
            newFormErrors.purpose = "Purpose is required.";
        }

        if (!data.agreeToTerms) {
            newFormErrors.agreeToTerms = "You must agree to the terms.";
        }

        setErrors(newFormErrors);

        return Object.keys(newFormErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isFormValid = validateForm();

        if (isFormValid) 
        {
            const newItem = { 
                ...data,
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`
            };
            
            onItemSubmit(newItem);
            setData(INITIAL_STATE);
            setErrors({});
        }        
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className={styles.form}
        >
            <h2>Add an Item to the Inventory</h2>

            <div className={`${styles.element} ${errors["name"] ? styles.error : ''}`}>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={data.name}
                    onChange={handleChange}
                />                
            </div>

            <div className={`${styles.element} ${errors["quantity"] ? styles.error : ''}`}>
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={data.quantity}
                    onChange={handleChange}
                />                
            </div>

            <div className={`${styles.element} ${errors["purpose"] ? styles.error : ''}`}>
                <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    value={data.purpose}
                    onChange={handleChange}
                />                
            </div>                    

            <div className={`${styles.agreeToTerms} ${errors["agreeToTerms"] ? styles.error : ''}`}>
                <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={data.agreeToTerms}
                    onChange={handleChange}
                />
                <label htmlFor="agreeToTerms"> Agree to Terms</label>
            </div>

            <button 
                type="submit"
                className={styles.button}
            >
                Add Item                
            </button>
            
        </form>
    );
}

export default ItemForm;