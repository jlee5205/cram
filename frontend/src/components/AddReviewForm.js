import { useState } from 'react';

function AddReviewForm( {onCreate} ){
    const [form, setForm] = useState({
        rating: null,
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name] : value,
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comment submmited", form);
        onCreate(form);
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input name="rating" placeholder='rating' onChange={handleChange} />
            <input name="comment" placeholder='comment' onChange={handleChange} />
            <button type="submit"> Create Review</button>
        </form>
    )
}

export default AddReviewForm;