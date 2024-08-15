import MessageContainer from '../../components/Messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-2xl shadow-2xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home;