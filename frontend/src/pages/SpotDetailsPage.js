import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Wifi, DollarSign, Star, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Skeleton } from "../components/ui/skeleton";
import { getSpotById } from "../api/spotsApi";
import { getReviews, createReview } from "../api/reviewsApi";
import AddReviewForm from "../components/AddReviewForm";

function SpotDetailsPage() {
    const { spotId } = useParams();
    const [spot, setSpot] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const spotData = await getSpotById(spotId);
                const reviewsData = await getReviews(spotId);
                setSpot(spotData);
                setReviews(reviewsData);
            } catch (err) {
                console.error(err);
                setError("Failed to load spot details. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [spotId]);

    const handleAddReview = async (review) => {
        try {
            const newReview = await createReview(spotId, review);
            setReviews(prev => [newReview, ...prev]);
        } catch (err) {
            console.error("Failed to add review:", err);
        }
    };

    const avgRating =
        reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
            : 0;

    const renderStars = (rating) => {
        return (
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 ${
                            star <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                        }`}
                    />
                ))}
            </div>
        );
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "short", 
            day: "numeric" 
        });
    };

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-64 w-full" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        );
    }

    if (!spot) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Alert>
                    <AlertDescription>Spot not found</AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Spot Header */}
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{spot.name}</h1>
                
                {/* Spot Meta Info */}
                <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="secondary" className="text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {spot.type}
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {spot.cost}
                    </Badge>
                    <Badge 
                        variant={spot.has_wifi ? "default" : "outline"} 
                        className="text-sm"
                    >
                        <Wifi className="w-3 h-3 mr-1" />
                        WiFi: {spot.has_wifi ? "Available" : "Not Available"}
                    </Badge>
                </div>

                {/* Rating Summary */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        {renderStars(Math.round(avgRating))}
                        <span className="text-2xl font-semibold text-gray-900">
                            {avgRating}
                        </span>
                    </div>
                    <span className="text-gray-500">
                        ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
                    </span>
                </div>
            </div>

            <Separator />

            {/* Reviews Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
                
                {reviews.length === 0 ? (
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-center text-gray-500">
                                No reviews yet. Be the first to review this spot!
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {reviews.map((review) => (
                            <Card key={review.id}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-lg">
                                                {review.username}
                                            </CardTitle>
                                            <CardDescription className="flex items-center gap-2 mt-1">
                                                <Clock className="w-3 h-3" />
                                                {review.created_at ? formatDate(review.created_at) : "Recently"}
                                            </CardDescription>
                                        </div>
                                        {renderStars(review.rating)}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">{review.comment}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <Separator />

            {/* Add Review Section */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Write a Review</h3>
                <Card>
                    <CardContent className="pt-6">
                        <AddReviewForm onCreate={handleAddReview} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default SpotDetailsPage;