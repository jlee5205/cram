import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header( {user, setUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    }

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            {/** Left: Logo Name */}
            <div className="justify-between items-start gap-4">
                <h1 className="text-5xl font-bold text-gray-500"> Cram </h1>
                <Link to="/spots" className=" text-sm font-bold text-xl">
                    Listed Spots
                </Link>
            </div>

            {/** Right: Nav Menu */}
            <nav className="flex items-center gap-4">
                {user ? (
                    <div>
                        <span>Welcome, {user.username} </span>
                        <Button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-500">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/login"> Login </Link>
                        </Button>
                        <Button className="bg-yellow-200" variant="default" size="sm" asChild>
                            <Link to="/signup"> Signup </Link>
                        </Button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;