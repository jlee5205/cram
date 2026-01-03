function SpotCard({spot}){
    return (
        <li> 
            <h3> {spot.name} </h3>
            <p> ⭐ {spot.avgRating} </p>
        </li>
    );
}

export default SpotCard;