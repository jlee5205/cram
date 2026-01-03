const BASE_URL = "http://localhost:3000/api/users";

export const getUsers = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("failed to fetch spots");
    return res.json();
}

export const createUser = async (spot) => {
    try {
        const res = await fetch(BASE_URL, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(spot)
        });
        if (!res.ok) throw new Error("Failed to create user");
        return res.json();
    } catch (err) {
        console.error("Network error:", err);
        throw new Error("Cannot reach server. Is the backend running?");
    }

}