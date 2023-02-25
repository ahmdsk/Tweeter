import Header from "../components/Header"
import { Link } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"
import { BsCameraFill } from "react-icons/bs"

export default function EditProfile() {
    return (
        <>
            <Header />
            <div className="flex justify-center py-10 px-4">
                <div className="flex flex-col gap-5 w-1/2">
                    <Link to="/profile" className="flex items-center gap-2 text-blue-500">
                        <FiChevronLeft />
                        <h3>Back</h3>
                    </Link>

                    <div className="border-2 border-gray-300 rounded-lg py-6">
                        <div className="flex items-center justify-between px-8 pb-4 last:pb-0 mb-4 last:mb-0">
                            <div className="">
                                <h3 className="text-2xl">Change Info</h3>
                                <p className="text-gray-600">Changes will be reflected to every services</p>
                            </div>
                        </div>
                        <div className="flex items-center px-8 pb-4 gap-6 last:pb-0 mb-4 last:mb-0">
                            <div className="h-16 relative">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile User" className="rounded-md h-full" />
                                <label htmlFor="change_pict" className="absolute top-6 left-6">
                                    <BsCameraFill className="text-white text-xl" />
                                </label>
                                <input type="file" className="hidden" id="change_pict" />
                            </div>
                            <div className="">
                                <h3 className="uppercase text-gray-500">Change Photo</h3>
                            </div>
                        </div>
                        <div className="px-8 pb-4">
                            <label htmlFor="name" className="block text-gray-700 pb-1">Name</label>
                            <input type="text" id="name" className="border-2 border-gray-400 rounded-lg outline-none py-3 px-5 bg-transparent w-2/3" placeholder="Enter your name..." />
                        </div>
                        <div className="px-8 pb-4">
                            <label htmlFor="bio" className="block text-gray-700 pb-1">Bio</label>
                            <textarea id="bio" className="border-2 border-gray-400 rounded-lg outline-none py-3 px-5 bg-transparent w-2/3 resize-none" placeholder="Enter your bio..."></textarea>
                        </div>
                        <div className="px-8 pb-4">
                            <label htmlFor="phone" className="block text-gray-700 pb-1">Phone</label>
                            <input type="text" id="phone" className="border-2 border-gray-400 rounded-lg outline-none py-3 px-5 bg-transparent w-2/3" placeholder="Enter your phone..." />
                        </div>
                        <div className="px-8 pb-4">
                            <label htmlFor="email" className="block text-gray-700 pb-1">Email</label>
                            <input type="email" id="email" className="border-2 border-gray-400 rounded-lg outline-none py-3 px-5 bg-transparent w-2/3" placeholder="Enter your email..." />
                        </div>
                        <div className="px-8 pb-4">
                            <label htmlFor="password" className="block text-gray-700 pb-1">Password</label>
                            <input type="password" id="password" className="border-2 border-gray-400 rounded-lg outline-none py-3 px-5 bg-transparent w-2/3" placeholder="Enter your password..." />
                        </div>
                        <div className="px-8">
                            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800">Save</button>
                        </div>
                    </div>

                    <div className="flex justify-between p-3">
                        <p className="text-gray-400">created by <a href="#" className="text-gray-500 font-semibold underline">ahmdsk</a></p>
                        <p className="text-gray-400">devChallenges.io</p>
                    </div>
                </div>
            </div>
        </>
    )
}
