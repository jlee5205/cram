const BASE_URL = "http://localhost:3000/api/geocode";

export const geocodeAddress = async (query) => {
    if (!query || query.length < 3) return [];
  
    const res = await fetch(
      `${BASE_URL}q=${encodeURIComponent(query)}`
    );
  
    if (!res.ok) throw new Error("Geocode failed");
    return res.json();
};