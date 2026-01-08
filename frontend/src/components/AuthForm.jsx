function AuthForm( {title, buttonText, onSubmit, children }) {
    return (
        <form onSubmit={onSubmit} className="auth-form">
            <h2> {title} </h2>
            {children}
            <button type="submit"> {buttonText} </button>
        </form>
    );
}

export default AuthForm;