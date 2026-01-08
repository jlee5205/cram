function SpotCard( {spot, onDelete} ){
    return (
        <li> 
            <h3> {spot.name} ⭐ {spot.avgRating} </h3>
            <button onClick={() => onDelete(spot.id)} style={{ backgroundColor: 'red', color: 'white' } }>
                delete
            </button>
        </li>
    );
}

export default SpotCard;