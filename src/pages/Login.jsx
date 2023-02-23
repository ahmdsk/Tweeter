import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import ReactLogo from "../assets/react.svg"

export default function Login() {
    return (

        <div className="flex justify-center items-center w-full min-h-screen min-[300px]:py-3 md:py-10 px-4">
            <div className="flex flex-col md:w-1/3 min-[300px]:w-full">
                <div className="border-2 border-gray-300 rounded-3xl md:px-16 min-[300px]:px-8 py-10">
                    <div className="flex gap-2 items-center pb-6">
                        <img src={ReactLogo} alt="Tweeter Logo" />
                        <h3 className="font-semibold text-[#282051]">Tweeter</h3>
                    </div>
                    <div className="pb-6">
                        <h3 className="text-gray-800 font-semibold">Login</h3>
                    </div>

                    <form action="" className="flex flex-col gap-4 pb-8">
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <FiMail className="absolute top-2 left-3 text-xl" />
                            <input type="text" name="" id="" placeholder="Email" className="w-full p-2 pl-12 outline-none rounded-md" />
                        </div>
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <FiLock className="absolute top-2 left-3 text-xl" />
                            <input type="password" name="" id="" placeholder="Password" className="w-full p-2 pl-12 outline-none rounded-md" />
                        </div>
                        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800">Login</button>
                    </form>

                    <div className="text-center">
                        <p className="text-gray-500">or continue with these social profile</p>
                        <div className="flex items-center justify-center gap-3 text-gray-400 py-4">
                            <div className="border-2 border-gray-300 p-3 rounded-full">
                                <FaGoogle />
                            </div>
                            <div className="border-2 border-gray-300 p-3 rounded-full">
                                <FaFacebookSquare />
                            </div>
                            <div className="border-2 border-gray-300 p-3 rounded-full">
                                <FaTwitter />
                            </div>
                            <div className="border-2 border-gray-300 p-3 rounded-full">
                                <FaGithub />
                            </div>
                        </div>
                        <p className="text-gray-500">Don't have an account yet? <Link to="/register" className="text-blue-500">Register</Link></p>
                    </div>
                </div>
                <div className="flex justify-between p-3">
                    <p className="text-gray-400">created by <a href="#" className="text-gray-500 font-semibold underline">ahmdsk</a></p>
                    <p className="text-gray-400">devChallenges.io</p>
                </div>
            </div>
        </div>
    )
}
