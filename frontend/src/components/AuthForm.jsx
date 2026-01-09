import { Button } from "../components/ui/button";

function AuthForm( {title, buttonText, onSubmit, children }) {
    return (
        <form
         onSubmit={onSubmit}
         className="w-full max-w-md max-auto p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            <h2 className="text-2xl font-bold text-center mb-4"> {title} </h2>

            {/* wraps and add vertical spacing between children */}
            <div className="space-y-4">
                {children}
            </div>
            <Button
             type="submit"
             className="w-full mt-4 bg-blue-500"
            > {buttonText} </Button>
        </form>
    );
}

export default AuthForm;