import e from "cors";
import { Link, useNavigate } from "react-router-dom";

function Header( {user, setUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    }

    return (
        <header className="p-4 bg-gray-800">
            <Link to="/spots" className="font-bold text-xl">
                Listed Spots
            </Link>
            <nav>
                {user ? (
                    <div>
                        <span>Welcome, {user.username}</span>
                        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className="hover:underline"> Login </Link>
                        <Link to="/signup" className="hover:underline"> Signup </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;