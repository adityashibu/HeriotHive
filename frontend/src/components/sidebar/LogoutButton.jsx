import { BiLogOut } from 'react-icons/bi'

const LogoutButton = () => {
    return (
        <div className="mt-auto">
            <button type='submit'>
                <BiLogOut className="w-6 h-6 text-white cursor-pointer hover:text-primaryBlue transition-colors duration-300 ease-in-out" />
            </button>
        </div>
    )
}

export default LogoutButton