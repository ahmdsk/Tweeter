import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Profile() {
    return (
        <>
            <Header />
            <div className="flex justify-center py-10 px-4">
                <div className="flex flex-col gap-8 w-1/2">
                    <div className="text-center">
                        <h3 className="text-3xl pb-2">Personal Info</h3>
                        <p className="font-light">Basic info, like your name and photo</p>
                    </div>

                    <div className="border-2 border-gray-300 rounded-lg py-6">
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="">
                                <h3 className="text-2xl">Profile</h3>
                                <p className="text-gray-600">Some info may be visible to other people</p>
                            </div>
                            <Link to="/profile/edit" className="border-2 border-gray-500 rounded-xl text-gray-500 text-lg px-8 py-1">Edit</Link>
                        </div>
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="w-4/12">
                                <h3 className="uppercase text-gray-400">Photo</h3>
                            </div>
                            <div className="w-8/12 h-16">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile User" className="rounded-md h-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="w-4/12">
                                <h3 className="uppercase text-gray-400">Name</h3>
                            </div>
                            <div className="w-8/12">
                                <h3 className="text-gray-700 font-medium">Ahmad Ganteng</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="w-4/12">
                                <h3 className="uppercase text-gray-400">Bio</h3>
                            </div>
                            <div className="w-8/12">
                                <h3 className="text-gray-700 font-medium">I am a software developer and a big fan of devchallenges...</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="w-4/12">
                                <h3 className="uppercase text-gray-400">Phone</h3>
                            </div>
                            <div className="w-8/12">
                                <h3 className="text-gray-700 font-medium">0812345678</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-8 pb-4 border-b-2 last:border-0 last:pb-0 mb-4 last:mb-0">
                            <div className="w-4/12">
                                <h3 className="uppercase text-gray-400">Email</h3>
                            </div>
                            <div className="w-8/12">
                                <h3 className="text-gray-700 font-medium">ahmad@tweeter.id</h3>
                            </div>
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
