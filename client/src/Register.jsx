import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-white h-screen w-screen flex items-center justify-center px-4">
            <div className="flex items-center bg-purple-200 px-10 py-10 sm:px-20 sm:py-20 rounded-3xl shadow-2xl w-full max-w-md">
                <form className="w-full">
                    <input
                        type="text"
                        placeholder="Username"
                        className="block w-full rounded-xl border-purple-600 border-2 px-5 py-2 mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="block w-full rounded-xl border-purple-600 border-2 px-5 py-2 mb-8"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-purple-900 font-bold text-white block w-full rounded-xl py-2 hover:bg-white hover:text-purple-900 hover:border-purple-900 border-2 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
