import { Link } from "react-router-dom";
import SpotCard from './SpotCard';

function SpotList( {spots}){
    return (
        <ul>
            {spots.map(s => (
                <li key={s.id}>
                    <Link to={`/spots/${s.id}`}>
                        <SpotCard spot={s}/>
                    </Link>
                </li>
            ))}
        </ul>
    )

}
export default SpotList;