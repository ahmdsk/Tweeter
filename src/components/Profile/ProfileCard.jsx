import { FaUserPlus } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <div className="bg-white mx-28 py-6 px-8 rounded-lg mb-4">
            <div className="flex">
                <div className="w-2/12 relative">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-36 rounded-lg absolute bottom-10 left-0 border border-4" />
                </div>
                <div className="w-10/12">
                    <div className="flex flex-col justify-between gap-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-8">
                                <h3 className="text-2xl font-semibold text-gray-700">Ahmad Ganteng</h3>
                                <div className="flex gap-2">
                                    <p className="text-gray-700 font-semibold">2,569</p>
                                    <p className="text-gray-400">Following</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-gray-700 font-semibold">10.8K</p>
                                    <p className="text-gray-400">Followers</p>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-800 flex items-center gap-2">
                                <FaUserPlus className="font-semibold" /> Follow
                            </button>
                        </div>
                        <div className="w-3/4">
                            <p className="text-gray-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi quod sed ad autem accusamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
