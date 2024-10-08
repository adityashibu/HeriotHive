import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300 pt-2">
                    Heriot
                    <span className="text-primaryBlue">Hive</span>
                </h1>
                <p className="text-center">Log in to the Hive</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 pt-10">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label pt-5">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to="/signup" className="text-sm hover:underline hover:text-primaryBlue mt-3 inline-block">
                        {"Don't"} have an account?
                    </Link>

                    <div className="pb-2 pt-5">
                        <button className="btn btn-block btn-sm mt-5 glass bg-primaryBlue text-white"
                            disabled={loading}

                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;