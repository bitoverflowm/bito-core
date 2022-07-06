
const LoginForm = ({ errorMessage, onSubmit }) => {
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="flex border-black border-2 rounded-full p-3 mt-3">
                    <input className="flex-auto" type="email" name="email" required placeholder="Email"/>

                    <div className="flex-none submit bg-blue-700 text-white rounded-full">
                        <button className="font-bold p-4" type="submit">Login</button>
                    </div>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}

export default LoginForm;