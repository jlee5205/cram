import { useEffect, useState } from "react";
import { getSpots, createSpot } from '../api/spotsApi';
import SpotList from '../components/SpotList';
import CreateSpotForm from '../components/CreateSpotForm';

function SpotsPage(){
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getSpots()
        .then(data => setSpots(data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    const handleCreateSpot = async (spot) =>{
        console.log("handle spot being called");
        try{
            const newSpot = await createSpot(spot);
            console.log("we created spot, so we updating");
            console.log(newSpot);
            setSpots(prev => [...prev, newSpot]);
        } catch(err){
            console.error("Create failed", err);
        }

    };

    if (loading) return <p>Loading spots...</p>;

    return (
        <>
            <h1> Study Spots</h1>
            <div className="space-y-4">
                <SpotList spots={spots} setSpots={setSpots}/>
                <CreateSpotForm onCreate={handleCreateSpot}/>
            </div>

        </>
    );
}

export default SpotsPage;