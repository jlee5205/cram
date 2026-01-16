import { Input } from "../components/ui/input";
import { useEffect, useState } from "react";
import { geocodeAddress } from "../api/geocodeApi";

export default function AddressInputForm({ value, onChange }) {
  const [query, setQuery] = useState(value?.display_name || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await geocodeAddress(query);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (place) => {
    setQuery(place.display_name);
    setResults([]);
    onChange(place); // send validated address object up
  };

  return (
    <div className="relative">
      <Input
        placeholder="Business Address"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && (
        <span className="absolute right-3 top-2 text-xs text-gray-400">
          Searching…
        </span>
      )}

      {results.length > 0 && (
        <ul className="absolute z-20 bg-white border w-full mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {results.map((r) => (
            <li
              key={r.place_id}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(r)}
            >
              {r.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
