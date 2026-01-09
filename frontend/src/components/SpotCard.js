function SpotCard( {spot, onDelete} ){
    return (
        <li> 
            <h3> {spot.name} ⭐ {spot.avgRating}
                <button onClick={() => onDelete(spot.id)}  className="bg-red-500 px-2 py-1 rounded hover:bg-black-500">
                    delete
                </button>
            </h3>
        </li>
    );
}

export default SpotCard;