import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-auto">
            <button type='submit'>
                {!loading ? (
                    <BiLogOut className="w-6 h-6 text-white cursor-pointer hover:text-primaryBlue transition-colors duration-300 ease-in-out" onClick={logout}
                    />
                ) : (
                    <span className="loading loading-spinner"></span>
                )}
            </button>
        </div>
    )
}

export default LogoutButton