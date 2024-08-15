import { MdOutlinePersonSearch } from "react-icons/md";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search for users' className="input input-bordered rounded-full" />
            <button type='submit' className="btn btn-circle bg-primaryBlue text-white">
                <MdOutlinePersonSearch className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput