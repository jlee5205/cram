import { useState } from 'react';

function CreateSpotForm( {onCreate} ){
    const [form, setForm] = useState({
        name: '',
        type: '',
        cost: '',
        hasWifi: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form", form);
        onCreate(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} />
            <input name="type" onChange={handleChange} />
            <input name="cost" onChange={handleChange} />
            <input type="checkbox" name="hadWifi" onChange={handleChange} /> 
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateSpotForm;