import { FaUserPlus } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <div className="bg-white lg:mx-28 md:mx-6 py-6 md:py-3 px-8 md:px-4 min-[300px]:mx-3 rounded-lg mb-4">
            <div className="flex md:flex-row min-[300px]:flex-col min-[300px]:items-center">
                <div className="md:w-2/12 min-[300px]:w-full relative min-[300px]:flex justify-center">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="md:w-36 min-[300px]:w-24 rounded-lg absolute md:bottom-2 md:left-0 border min-[300px]:bottom-0 border-4" />
                </div>
                <div className="w-10/12">
                    <div className="flex flex-col justify-between md:items-stretch gap-6 md:gap-3 min-[300px]:gap-3 md:px-4 min-[300px]:items-center">
                        <div className="flex md:flex-row min-[300px]:flex-col justify-between items-center">
                            <div className="flex md:flex-row min-[300px]:flex-col items-center md:gap-4 min-[300px]:gap-2">
                                <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Ahmad Ganteng</h3>
                                <div className="flex gap-3 md:pb-0 min-[300px]:pb-2 min-[300px]:justify-between">
                                    <div className="flex gap-2">
                                        <p className="text-gray-700 font-semibold md:text-sm">2,569</p>
                                        <p className="text-gray-400 md:text-sm">Following</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="text-gray-700 font-semibold md:text-sm">10.8K</p>
                                        <p className="text-gray-400 md:text-sm">Followers</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-800 md:flex items-center gap-2 min-[300px]:hidden">
                                <FaUserPlus className="font-semibold" /> Follow
                            </button>
                        </div>
                        <div className="w-3/4 h-20 min-[300px]:h-auto min-[300px]:text-center md:text-start min-[300px]:w-full">
                            <p className="text-gray-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <button className="bg-blue-500 text-white font-medium p-2 px-6 rounded hover:bg-blue-800 min-[300px]:flex items-center gap-2 md:hidden">
                            <FaUserPlus className="font-semibold" /> Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
