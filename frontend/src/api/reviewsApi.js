const BASE_URL = "http://localhost:3000/api";

// /api/spots/:spotId/reviews
export const getReviews = async (spotId) => {
    const res = await fetch(`${BASE_URL}/spots/${spotId}/reviews`);
    if (!res.ok) throw new Error("failed to fetch reviews");
    return res.json();
    // const data = res.json();
    // return Array.isArray(data) ? data : [];
}


export const createReview = async (spotId,review) => {
    console.log("the review is");
    console.log(review);
    try {
        const res = await fetch(`${BASE_URL}/spots/${spotId}/reviews`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(review)
        });
        if (!res.ok) throw new Error("Failed to create review");
        return res.json();
    } catch (err) {
        console.error("Network error:", err);
        throw new Error("Cannot reach server. Is the backend running?");
    }

}