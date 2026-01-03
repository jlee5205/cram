const BASE_URL = "http://localhost:3000/api/spots";

export const getSpots = async () => {
    console.log("RUNNING IN:", typeof window === 'undefined' ? 'SERVER' : 'BROWSER');
    console.log(BASE_URL);
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("failed to fetch spots");
    return res.json();
}

export const getSpotById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`failed to fetch spot ${id}`);
    return res.json();
}

export const createSpot = async (spot) => {
    console.log("the spot is");
    console.log(spot);
    try {
        const res = await fetch(BASE_URL, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(spot)
        });
        console.log(res);
        if (!res.ok) throw new Error("Failed to create spot");
        return res.json();
    } catch (err) {
        console.error("Network error:", err);
        throw new Error("Cannot reach server. Is the backend running?");
    }

}