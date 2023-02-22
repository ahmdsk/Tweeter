import { FaUserPlus } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <div className="bg-white mx-28 md:mx-6 py-6 md:py-3 px-8 md:px-4 rounded-lg mb-4">
            <div className="flex">
                <div className="w-2/12 relative">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-36 rounded-lg absolute bottom-10 md:bottom-16 left-0 border border-4" />
                </div>
                <div className="w-10/12">
                    <div className="flex flex-col justify-between gap-6 md:gap-3 md:px-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-8 md:gap-4">
                                <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Ahmad Ganteng</h3>
                                <div className="flex gap-2">
                                    <p className="text-gray-700 font-semibold md:text-sm">2,569</p>
                                    <p className="text-gray-400 md:text-sm">Following</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-gray-700 font-semibold md:text-sm">10.8K</p>
                                    <p className="text-gray-400 md:text-sm">Followers</p>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-800 flex items-center gap-2">
                                <FaUserPlus className="font-semibold" /> Follow
                            </button>
                        </div>
                        <div className="w-3/4 h-20">
                            <p className="text-gray-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
