import LoginUserForm from "../components/LoginUserForm";

function Login( {setUser} ) {
    return (
        <div>
            <LoginUserForm setUser={setUser}/>
        </div>
    )
}

export default Login;