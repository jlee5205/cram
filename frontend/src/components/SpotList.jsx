import { Link } from "react-router-dom";
import SpotCard from './SpotCard';
import { deleteSpot } from "../api/spotsApi";
import { useNavigate } from "react-router-dom";

function SpotList( {spots, setSpots} ){
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const data = await deleteSpot(id);
            console.log('in spot list');
            console.log(data);
            setSpots(spots.filter(spot => spot.id !== id));
            navigate('/spots');
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <ul>
            {spots.map(s => (
                <li key={s.id}>
                    <Link to={`/spots/${s.id}`}>
                        <SpotCard spot={s} onDelete={handleDelete}/>
                    </Link>
                </li>
            ))}
        </ul>
    )

}
export default SpotList;