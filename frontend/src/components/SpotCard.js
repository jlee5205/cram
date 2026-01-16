import { Link } from "react-router-dom";
import { MapPin, Wifi, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

function SpotCard({ spot, onDelete }) {
    // Calculate average rating from reviews if available
    // const avgRating = spot.avgRating || 4;
    const avgRating = 4;
    const reviewCount = 3;
    // const reviewCount = spot.reviewCount || 0;

    const renderStars = (rating) => {
        return (
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 ${
                            star <= Math.round(rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                        }`}
                    />
                ))}
            </div>
        );
    };
    console.log(spot)
    return (
        <Link to={`/spots/${spot.id}`} className="block group">
            <Card className="flex flex-col md:flex-row hover:shadow-lg transition-all duration-200 group-hover:border-gray-400 overflow-hidden h-full">
                {/* Spot Image */}
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                    <img
                        src={spot.imageUrl || "/placeholder-spot.jpg"}
                        alt={spot.name}
                        className="w-full h-full object-cover"
                    />
                    {/* Optional: Delete button overlay (only show if onDelete provided) */}
                    {onDelete && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onDelete(spot.id);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        >
                            Delete
                        </button>
                    )}
                </div>

                {/* Spot Info */}
                <div className="flex-1 flex flex-col">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                            {spot.name}
                        </CardTitle>
                        
                        {/* Rating */}
                        {reviewCount > 0 && (
                            <div className="flex items-center gap-2 mt-2">
                                {renderStars(avgRating)}
                                <span className="text-sm text-gray-600">
                                    {avgRating.toFixed(1)} ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
                                </span>
                            </div>
                        )}
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between space-y-3">
                        {/* Location */}
                        {spot.location && (
                            <div className="flex items-center gap-1 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{spot.location}</span>
                            </div>
                        )}

                        {/* Spot Attributes */}
                        <div className="flex flex-wrap gap-2">
                            {spot.type && (
                                <Badge variant="secondary" className="text-xs">
                                    {spot.type}
                                </Badge>
                            )}
                            {spot.cost && (
                                <Badge variant="secondary" className="text-xs">
                                    <DollarSign className="w-3 h-3 mr-0.5" />
                                    {spot.cost}
                                </Badge>
                            )}
                            {spot.has_wifi !== undefined && (
                                <Badge 
                                    variant={spot.has_wifi ? "default" : "outline"} 
                                    className="text-xs"
                                >
                                    <Wifi className="w-3 h-3 mr-0.5" />
                                    WiFi
                                </Badge>
                            )}
                        </div>
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
}

export default SpotCard;
// import { Link } from "react-router-dom";
// import { Card, CardContent, CardAction, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

// // function StarRating({ rating }) {
// //     const fullStars = Math.floor(rating);
// //     const halfStar = rating - fullStars >= 0.5;
// //     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
// //     return (
// //       <div className="flex items-center text-yellow-500">
// //         {[...Array(fullStars)].map((_, i) => (
// //           <span key={`full-${i}`}>★</span>
// //         ))}
// //         {halfStar && <span>☆</span>}
// //         {[...Array(emptyStars)].map((_, i) => (
// //           <span key={`empty-${i}`} className="text-gray-300">★</span>
// //         ))}
// //       </div>
// //     );
// //   }

// function SpotCard( {spot, onDelete} ){
//     return (
//         <Link to={`/spots/${spot.id}`} className="block">
//         <Card className="flex flex-col md:flex-row hover:shadow-lg transition-shadow">
//           {/* Spot Image */}
//           <img
//             src={spot.imageUrl}
//             alt={spot.name}
//             className="w-full md:w-40 h-40 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
//           />
  
//           {/* Spot Info */}
//           <div className="flex-1 p-4 flex flex-col justify-between">
//             <CardHeader className="p-0">
//               <CardTitle className="text-lg">{spot.name}</CardTitle>
//             </CardHeader>
  
//             <CardContent className="p-0 mt-2 flex flex-col gap-1">
//               <div className="flex items-center gap-2">
//                 {/* <StarRating rating={3.4} /> */}
//                 {/* <span className="text-gray-500 text-sm">
//                   {spot.avgRating.toFixed(1)} · {spot.reviewCount} reviews
//                 </span> */}
//               </div>
//               <div className="text-gray-600 text-sm">{spot.location}</div>
//             </CardContent>
//           </div>
//         </Card>
//       </Link>
//     );
//     return (
//         <li> 
//             <h3> {spot.name} ⭐ {spot.avgRating}
//                 <button onClick={() => onDelete(spot.id)}  className="bg-red-500 px-2 py-1 rounded hover:bg-black-500">
//                     delete
//                 </button>
//             </h3>
//         </li>
//     );
// }

// export default SpotCard;