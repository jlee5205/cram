import { useState } from 'react';
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Star } from "lucide-react";
import { Textarea } from "../components/ui/textarea";


function AddReviewForm( {onCreate} ){
    const [form, setForm] = useState({
        rating: null,
        comment: '',
    });
    const [hoveredRating, setHoveredRating] = useState(0);

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
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Star Rating Selector */}
            <div className="space-y-2">
                <Label>Your Rating</Label>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setForm({ ...form, rating: star })}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                        >
                            <Star
                                className={`w-8 h-8 cursor-pointer transition-colors ${
                                    star <= (hoveredRating || form.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Comment Textarea */}
            <div className="space-y-2">
                <Label htmlFor="comment">Your Review</Label>
                <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Share your experience..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    rows={4}
                    required
                />
            </div>

            <Button type="submit" className="mx-auto text-blue-400 bg-white border border-black-200">
                Submit Review
            </Button>
        </form>
    );
}

export default AddReviewForm;