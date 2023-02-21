import { MdOutlineModeComment } from "react-icons/md"
import { FiBookmark, FiHeart, FiRefreshCcw } from "react-icons/fi"
import { BsImage } from "react-icons/bs"

export default function TweetSection() {
    return (
        <>
            <div className="bg-white shadow-sm rounded-lg py-4 px-6 my-6">
                <div className="flex gap-4 items-center">
                    <div className="w1/12">
                        <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                    </div>
                    <div className="w-11/12">
                        <h1 className="text-gray-800 font-semibold text-md">Ahmad Ganteng</h1>
                        <p className="text-gray-400 text-sm">24 Agustus 1993</p>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-md text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laborum quia autem laboriosam quo nihil porro accusamus neque quisquam quidem.</p>
                </div>
                <div className="pb-3">
                    <img src="https://images.unsplash.com/photo-1676763134382-6572869ba6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" className="rounded-md h-72 w-full object-cover object-ceter" alt="User Post" />
                </div>
                <div className="flex justify-end pb-3">
                    <div className="flex gap-8">
                        <span className="text-gray-400">
                            449 Comments
                        </span>
                        <span className="text-gray-400">
                            59k Retweets
                        </span>
                        <span className="text-gray-400">
                            234 Saved
                        </span>
                    </div>
                </div>
                <div className="border-y border-gray-100 py-3 flex justify-center items-center">
                    <div className="w-3/12 flex items-center justify-center gap-2 text-gray-700 font-medium">
                        <MdOutlineModeComment />
                        <h3>Comment</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-green-500 font-medium">
                        <FiRefreshCcw />
                        <h3>Retweeted</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-red-500 font-medium">
                        <FiHeart />
                        <h3>Liked</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-blue-700 font-medium">
                        <FiBookmark />
                        <h3>Saved</h3>
                    </div>
                </div>
                <div className="flex py-3">
                    <div className="w-1/12">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                    </div>
                    <div className="w-11/12 relative">
                        <input type="text" className="border-2 border-gray-200 focus:outline-none rounded-md h-full w-full pl-4 pr-14 text-gray-600" placeholder="Tweet your reply" />
                        <label for="img_comment" className="absolute top-1/4 right-4">
                            <input type="file" name="img_comment" id="img_comment" className="hidden" />
                            <BsImage className="text-xl text-gray-400" />
                        </label>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-4 pb-3">
                    <div className="flex gap-4 items-start pb-6">
                        <div className="w1/12">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                        </div>
                        <div className="w-11/12">
                            <div className="flex gap-4 items-center">
                                <h1 className="text-gray-800 font-semibold text-md">Ahmad Ganteng</h1>
                                <p className="text-gray-400 text-sm">24 Agustus 1993</p>
                            </div>
                            <p className="pt-2 pb-6 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id quibusdam, blanditiis excepturi dolorem ratione!</p>
                            <div className="flex gap-4 items-center">
                                <button className="flex gap-3 items-center text-gray-400" onClick={() => alert('loved <3')}>
                                    <FiHeart />
                                    <p>Liked</p>
                                </button>
                                <p className="text-gray-400">&#x2022;</p>
                                <p className="text-gray-400">12k Likes</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start pb-6">
                        <div className="w1/12">
                            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                        </div>
                        <div className="w-11/12">
                            <div className="flex gap-4 items-center">
                                <h1 className="text-gray-800 font-semibold text-md">Cewenya Ahmad</h1>
                                <p className="text-gray-400 text-sm">24 Agustus 1993</p>
                            </div>
                            <p className="pt-2 pb-6 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <div className="flex gap-4 items-center">
                                <button className="flex gap-3 items-center text-red-600" onClick={() => alert('loved <3')}>
                                    <FiHeart />
                                    <p>Liked</p>
                                </button>
                                <p className="text-gray-400">&#x2022;</p>
                                <p className="text-gray-400">12k Likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg py-4 px-6 my-6">
                <div className="flex gap-4 items-center">
                    <div className="w1/12">
                        <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                    </div>
                    <div className="w-11/12">
                        <h1 className="text-gray-800 font-semibold text-md">Ahmad Ganteng</h1>
                        <p className="text-gray-400 text-sm">24 Agustus 1993</p>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-md text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laborum quia autem laboriosam quo nihil porro accusamus neque quisquam quidem.</p>
                </div>
                <div className="flex justify-end pb-3">
                    <div className="flex gap-8">
                        <span className="text-gray-400">
                            449 Comments
                        </span>
                        <span className="text-gray-400">
                            59k Retweets
                        </span>
                        <span className="text-gray-400">
                            234 Saved
                        </span>
                    </div>
                </div>
                <div className="border-y border-gray-100 py-3 flex justify-center items-center">
                    <div className="w-3/12 flex items-center justify-center gap-2 text-gray-700 font-medium">
                        <MdOutlineModeComment />
                        <h3>Comment</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-green-500 font-medium">
                        <FiRefreshCcw />
                        <h3>Retweeted</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-red-500 font-medium">
                        <FiHeart />
                        <h3>Liked</h3>
                    </div>
                    <div className="w-3/12 flex items-center justify-center gap-2 text-blue-700 font-medium">
                        <FiBookmark />
                        <h3>Saved</h3>
                    </div>
                </div>
                <div className="flex py-3">
                    <div className="w-1/12">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                    </div>
                    <div className="w-11/12 relative">
                        <input type="text" className="border-2 border-gray-200 focus:outline-none rounded-md h-full w-full pl-4 pr-14 text-gray-600" placeholder="Tweet your reply" />
                        <label for="img_comment" className="absolute top-1/4 right-4">
                            <input type="file" name="img_comment" id="img_comment" className="hidden" />
                            <BsImage className="text-xl text-gray-400" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
