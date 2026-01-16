import { useState } from 'react';
import AddressInputForm from "./AddressInputForm";

function CreateSpotForm( {onCreate} ){
    const initialForm = {
        name: '',
        type: '',
        cost: '',
        hasWifi: false,
    };

    const [form, setForm] = useState(initialForm);

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
        setForm(initialForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder='name' />
            <input name="type" value={form.type} onChange={handleChange} placeholder='type (Cafe, Library, Park)' />
            <input name="cost" value={form.cost} onChange={handleChange} placeholder='cost ($, $$, $$$)'/>
            <input type="checkbox" value={form.hasWifi} name="hadWifi" onChange={handleChange} placeholder='has wifi?' /> 
        {/* <AddressInputForm
        value={form.address}
        onChange={(address) =>
            setForm((p) => ({ ...p, address }))
        }
      /> */}
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateSpotForm;