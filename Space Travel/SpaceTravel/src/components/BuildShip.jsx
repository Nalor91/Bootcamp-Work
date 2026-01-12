import React, {useState} from 'react';

const BuildShip = ({ addShip }) => {
    const INITIAL_STATE = {
        name: '',
        capacity: '',
        description: '',
        pictureUrl: ''
    };

    const [shipData, setShipData] = useState(INITIAL_STATE);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setShipData(shipData => ({
            ...shipData,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addShip({...shipData});
        setShipData(INITIAL_STATE);        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                    <input 
                        id="name"
                        type="text"
                        name='name' 
                        value={shipData.name} 
                        onChange={handleChange}
                        required 
                        placeholder='Name of Ship'
                    />                
            </div>            
            <div>
                <label htmlFor='number'>Capacity</label>
                    <input 
                        id="number"
                        type="number"
                        name='capacity' 
                        value={shipData.capacity} 
                        onChange={handleChange}
                        required 
                        placeholder='Capacity of Ship'
                    />                
            </div>            
            <div>
                <label htmlFor='description'>Description</label>
                    <textarea 
                        id="description"
                        name='description' 
                        value={shipData.description} 
                        onChange={handleChange}
                        required 
                        placeholder='Description of Ship'
                    />                
            </div>            
            <div>
                <label htmlFor='pictureUrl'>Picture URL</label >
                    <input 
                        id="text"
                        type="text"
                        name='pictureUrl' 
                        value={shipData.pictureUrl} 
                        onChange={handleChange}                        
                        placeholder='Picture URL'
                    />                
            </div>  
            <button type='submit'>Build Ship</button>          
        </form>
    );

}

export default BuildShip;