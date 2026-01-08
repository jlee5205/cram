function SpotCard({spot}){
    return (
        <li> 
            <h3> {spot.name} ⭐ {spot.avgRating} </h3>
        </li>
    );
}

export default SpotCard;