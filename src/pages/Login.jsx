import axios from "axios"
import { Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"
import { FiLock, FiMail } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ReactLogo from "../assets/react.svg"

export default function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('_urlogin')
        if(token) {
            navigate('/')
        }
    }, [])

    async function handleLogin(values) {
        setEmail(values.email)
        setPassword(values.password)

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
            await axios.post('http://localhost:3001/login', { email, password })
                .then((res) => {
                    if(res.data.status) {
                        toast.success(res.data.message, notifyOptions)
                        localStorage.setItem('_urlogin', res.data.data.token)
                        setTimeout(() => {
                            navigate('/')
                        }, 3000)
                    } else {
                        toast.error(res.data.data.errors, notifyOptions)
                    }
                }).catch((error) => {
                    toast.error(error, notifyOptions)
                })
        } catch(error) {
            toast.error(error, notifyOptions)
        }
    }

    return (
        <div className="flex justify-center md:items-center w-full min-h-screen min-[300px]:py-3 md:py-10 px-4">
            <div className="flex flex-col md:w-1/3 min-[300px]:w-full min-[300px]:justify-between">
                <div className="md:border-2 border-gray-300 rounded-3xl md:px-16 min-[300px]:p-0 md:py-10">
                    <Link to="/" className="flex gap-2 items-center pb-6">
                        <img src={ReactLogo} alt="Tweeter Logo" />
                        <h3 className="font-semibold text-[#282051]">Tweeter</h3>
                    </Link>
                    <div className="pb-6">
                        <h3 className="text-gray-800 font-semibold">Welcome back people. Login in here to continue communicate</h3>
                    </div>

                    <Formik
                        initialValues={{ email, password }}
                        validate={values => {
                            const errors = {}
                            
                            if(!values.email) {
                                errors.email = 'Email is required'
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address'
                            }

                            if(!values.password) {
                                errors.password = 'Password is required'
                            }

                            return errors
                        }}
                        onSubmit={(values) => handleLogin(values)}
                    >
                        {({ values, errors, handleChange }) => (
                            <Form className="flex flex-col gap-4 pb-8">
                                <div className="">
                                    <div className="flex text-gray-600 relative border border-gray-400 rounded-md">
                                        <FiMail className="absolute top-2 left-3 text-xl" />
                                        <input type="text" name="email" id="email" placeholder="Email" className="w-full p-2 pl-12 outline-none rounded-md" onChange={handleChange} value={values.email} />
                                    </div>
                                    { errors.email && (
                                        <p className="text-gray-600 text-sm pt-1">{errors.email}</p>
                                    ) }
                                </div>
                                <div className="">
                                    <div className="flex relative text-gray-600 border border-gray-400 rounded-md">
                                        <FiLock className="absolute top-2 left-3 text-xl" />
                                        <input type="password" name="password" id="password" placeholder="Password" className="w-full p-2 pl-12 outline-none rounded-md" onChange={handleChange} value={values.password} />
                                    </div>
                                    {errors.password && (
                                        <p className="text-gray-600 text-sm pt-1">{errors.password}</p>
                                    )}
                                </div>
                                <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800">Login</button>
                            </Form>
                        )}
                    </Formik>

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
