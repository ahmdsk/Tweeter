import { MdOutlineModeComment } from "react-icons/md"
import { FiBookmark, FiHeart, FiRefreshCcw } from "react-icons/fi"
import { BsImage } from "react-icons/bs"
import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment/moment"

export default function TweetSection() {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        async function getAllPosts() {
            await axios.get('http://localhost:3001/posts')
                .then((res) => {
                    setPosts(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        getAllPosts()
    }, [])

    return (
        <>
            {posts.map((post) => {
                return <div className="bg-white shadow-sm rounded-lg py-4 px-6 mb-6" key={post._id}>
                    <div className="flex gap-4 items-center">
                        <div className="w1/12">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                        </div>
                        <div className="w-11/12">
                            <h1 className="text-gray-800 font-semibold text-md">{post.user.name}</h1>
                            <p className="text-gray-400 text-sm">{moment(post.createdAt).locale('id').format('DD MMMM YYYY')}</p>
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="text-md text-gray-600">{post.posts}</p>
                    </div>
                    {post.photos.length > 0 ?
                        <div className="pb-3 carousel rounded-md">
                            {post.photos.map((photo, index) => {
                               return <img src={`http://localhost:3001/uploads/${photo}`} className="w-full object-cover object-fit carousel-item rounded-md" alt="User Post" key={index} />
                            })}
                        </div>
                        : ''
                    }
                    <div className="flex justify-end pb-3">
                        <div className="flex md:gap-8 min-[300px]:gap-4">
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
                            <h3 className="min-[300px]:hidden md:inline">Comment</h3>
                        </div>
                        <div className="w-3/12 flex items-center justify-center gap-2 text-green-500 font-medium">
                            <FiRefreshCcw />
                            <h3 className="min-[300px]:hidden md:inline">Retweeted</h3>
                        </div>
                        <div className="w-3/12 flex items-center justify-center gap-2 text-red-500 font-medium">
                            <FiHeart />
                            <h3 className="min-[300px]:hidden md:inline">Liked</h3>
                        </div>
                        <div className="w-3/12 flex items-center justify-center gap-2 text-blue-700 font-medium">
                            <FiBookmark />
                            <h3 className="min-[300px]:hidden md:inline">Saved</h3>
                        </div>
                    </div>
                    <div className="flex py-3">
                        <div className="w-1/12">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                        </div>
                        <div className="w-11/12 relative">
                            <input type="text" className="border-2 border-gray-200 focus:outline-none rounded-md h-full w-full ml-2 py-2 pl-4 pr-14 text-gray-600" placeholder="Tweet your reply" />
                            <label htmlFor="img_comment" className="absolute top-1/4 right-4">
                                <input type="file" name="img_comment" id="img_comment" className="hidden" />
                                <BsImage className="text-xl text-gray-400" />
                            </label>
                        </div>
                    </div>
                    {/* <div className="border-t border-gray-100 pt-4 pb-3">
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
                    </div> */}
                </div>
            })}
        </>
    )
}
