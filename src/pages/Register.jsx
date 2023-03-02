import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"
import { MdOutlineContacts } from "react-icons/md"
import { FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import ReactLogo from "../assets/react.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [phone, setPhone] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('_urlogin')
        if(token) {
            navigate('/')
        }
    }, [])

    async function handleRegister(e) {
        e.preventDefault()

        let notifyOptions = {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }

        try {
            await axios.post('http://localhost:3001/register', { name, email, password, phone })
                .then((res) => {
                    if(res.data.status) {
                        toast.success(res.data.message, notifyOptions)
                        localStorage.setItem('_urlogin', res.data.data.token)
                        setTimeout(() => {
                            navigate('/')
                        }, 3000)
                    } else {
                        toast.error(res.data.message, notifyOptions)
                    }
                }).catch((error) => {
                    toast.error(error.response.data.data.errors, notifyOptions)
                })
        } catch(error) {
            toast.error(error, notifyOptions)
        }
    }

    return (
        <div className="flex justify-center md:items-center w-full min-h-screen min-[300px]:py-3 md:py-10 px-4">
            <div className="flex flex-col md:w-1/3 min-[300px]:w-full min-[300px]:justify-between">
                <div className="md:border-2 border-gray-300 rounded-3xl md:px-16 min-[300px]:px-0 md:py-10">
                    <Link to="/" className="flex gap-2 items-center pb-6">
                        <img src={ReactLogo} alt="Tweeter Logo" />
                        <h3 className="font-semibold text-[#282051]">Tweeter</h3>
                    </Link>
                    <div className="pb-6">
                        <h3 className="text-gray-800 font-semibold pb-3">Join tweeter today for worldwide communication</h3>
                        <p className="text-gray-800">Master web development by making real-life projects. There are multiple path for you to choose</p>
                    </div>

                    <form action="#" method="post" className="flex flex-col gap-4 pb-8">
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <FiUser className="absolute top-2 left-3 text-xl" />
                            <input type="text" name="name" placeholder="Name" className="w-full p-2 pl-12 outline-none rounded-md" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <FiMail className="absolute top-2 left-3 text-xl" />
                            <input type="text" name="email" placeholder="Email" className="w-full p-2 pl-12 outline-none rounded-md" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <FiLock className="absolute top-2 left-3 text-xl" />
                            <input type="password" name="password" placeholder="Password" className="w-full p-2 pl-12 outline-none rounded-md" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                            <MdOutlineContacts className="absolute top-2 left-3 text-xl" />
                            <input type="tetx" name="phone" placeholder="Number Phone" className="w-full p-2 pl-12 outline-none rounded-md" onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800" onClick={handleRegister}>Register</button>
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
                        <p className="text-gray-500">Already a member? <Link to="/login" className="text-blue-500">Login</Link></p>
                    </div>
                </div>
                <div className="flex justify-between p-3">
                    <p className="text-gray-400">created by <a href="#" className="text-gray-500 font-semibold underline">ahmdsk</a></p>
                    <p className="text-gray-400">devChallenges.io</p>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
