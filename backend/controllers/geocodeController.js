// import fetch from "node-fetch";

// const geocodeAddress = async (req, res) => {
//     const { q } = req.query;
//     if (!q) return res.status(400).json({ error: "Missing query" });

//     try {
//         const response = await fetch(
//             `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
//                 q
//               )}&format=json&addressdetails=1&limit=5`,
//             {
//             headers: {
//                 "User-Agent": "CramApp/1.0 (contact: your-email@example.com)",
//             },
//             }
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Geocoding failed" });
//     }
// }

// module.exports = {
//     geocodeAddress
// }