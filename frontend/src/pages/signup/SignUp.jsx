import { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300 pt-2">
                    Heriot
                    <span className="text-primaryBlue">Hive</span>
                </h1>
                <p className="text-center">Welcome to the Hive</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 pt-10">
                            <span className="text-base label-text">First Name</span>
                        </label>
                        <input type="text" placeholder='John' className="w-full input input-bordered h-10" value={inputs.firstName} onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })} />
                    </div>

                    <div>
                        <label className="label p-2 pt-3">
                            <span className="text-base label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder='Doe' className="w-full input input-bordered h-10" value={inputs.lastName} onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })} />
                    </div>

                    <div>
                        <label className="label p-2 pt-3">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder='johndoe' className="w-full input input-bordered h-10" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className="label pt-3">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder='Minimum 8 characters' className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div>
                        <label className="label pt-3">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Minimum 8 characters' className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm hover:underline hover:text-primaryBlue mt-3 inline-block">
                        Have an account?
                    </Link>

                    <div className="pb-2 pt-5">
                        <button className="btn btn-block btn-sm mt-5 glass bg-primaryBlue text-white">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;