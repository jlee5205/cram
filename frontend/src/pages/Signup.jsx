import SignupUserForm from "../components/SignupUserForm";

function Signup( {setUser} ) {
    return (
        <div>
            <SignupUserForm setUser={setUser}/>
        </div>
    )
}

export default Signup;