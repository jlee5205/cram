import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpotById } from "../api/spotsApi";
import { getReviews, createReview } from "../api/reviewsApi";
import AddReviewForm from "../components/AddReviewForm";

function SpotDetailsPage() {
    const { spotId }  = useParams();
    const [spot, setSpot] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const spotData = await getSpotById(spotId);
                const reviewsData = await getReviews(spotId);
                setSpot(spotData);
                setReviews(reviewsData);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }

        };
        fetchData();
    }, [spotId])

    const handleAddReview = async(review) => {
        const newReview = await createReview(spotId, review);
        setReviews(prev => [...prev, newReview]);

    };
    if (loading) return <p> Loading...</p>
    if (!spot) return <p> Spot not found </p>
    const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0; // default to 0 if no reviews

    return (
        <div>
            <h1> {spot.name} </h1>
            <p> {spot.type} | {spot.cost} | Wifi: {spot.has_wifi ? "Yes" : "No" } | Average Rating: {avgRating} </p>
            <h2> Reviews</h2>
            {reviews.map(r => (
                <div key={r.id}>
                    <strong>{r.username}</strong> : {r.comment} ({r.rating}/5)
                </div>
            ))}
            <h3> Add a Review </h3>
            <AddReviewForm onCreate={handleAddReview}/>
        </div>

    )
}

export default SpotDetailsPage;