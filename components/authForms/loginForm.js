
const LoginForm = ({ errorMessage, onSubmit }) => {
    return(
        <div>
            <form onSubmit={onSubmit} className="grid place-items-center">
                <div className="flex border-black border-2 rounded-full px-2 py-1 mt-3 max-w-md">
                    <input className="flex-auto focus:border-white focus:outline-none bg-transparent" type="email" name="email" required placeholder="Email"/>

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