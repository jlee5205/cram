import { Button } from "../components/ui/button";
function AuthForm( {onSubmit, children }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            {/* <h2 className="text-2xl font-bold text-center mb-4"> {title} </h2> */}
            {/* wraps and add vertical spacing between children */}
            {/* <div className="space-y-4"> */}
            {children}
            <Button type="submit" className="w-full bg-blue-500"> 
                    Login
            </Button>
        </form>
    );
}

export default AuthForm;