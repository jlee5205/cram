const BASE_URL = "http://localhost:3000/api/auth";

/*
expects:
{
  "email": "test@example.com",
  "password": "password123"
}
*/

// /api/auth/signup
export const signupUser = async (credentials) => {
    const { username, email, password } = credentials;
    try {
        const res = await fetch(`${BASE_URL}/signup`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        if (!res.ok) throw new Error("Failed to signup user");
        return res.json();
    } catch (err) {
        console.error("Network error:", err);
        throw new Error("Cannot reach server. Is the backend running?");
    }

}

// /api/auth/login
export const loginUser = async (credentials) => {
    const { email, password } = credentials;
    console.log("I am in frontend api login");
    console.log(email, password);
    try{
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify( {email, password} )
        })
        if (!res.ok) throw new Error("Failed to login user");
        const data = await res.json();
        return data.user;
    } catch (err) {
        console.error("Network error:", err);
        throw new Error("Cannot reach server. Is the backend running?");
    }
}