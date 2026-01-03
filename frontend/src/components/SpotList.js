import SpotCard from './SpotCard';

function SpotList( {spots}){
    return (
        <ul>
            {spots.map(s =>
                (<SpotCard key={s.id} spot={s}/>
            ))}
        </ul>
    )

}

export default SpotList;