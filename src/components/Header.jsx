import { Link, NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai"
import { FaUserCircle, FaUserFriends } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { TbLogout } from "react-icons/tb"
import { Menu, Transition } from "@headlessui/react"
import ReactLogo from "../assets/react.svg"

export default function Header() {
    return (
        <header className="bg-white flex justify-between items-center py-4 px-10 md:px-8 min-[300px]:px-6">
            <div className="w3/12">
                <div className="flex gap-3 items-center">
                    <img src={ReactLogo} alt="Logo" className="w-8" />
                    <h3 className="text-lg font-semibold text-gray-800">
                        <Link to="/">Tweeter</Link>
                    </h3>
                </div>
            </div>
            <div className="w3/12 min-[300px]:hidden md:inline">
                <ul className="flex gap-10">
                    <li>
                        <NavLink to="/" className="text-gray-500 font-medium">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="text-gray-500 font-medium">Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookmarks" className="text-gray-500 font-medium">Bookmarks</NavLink>
                    </li>
                </ul>
            </div>
            <div className="w3/12">
                <Menu as="div" className="relative">
                    <Menu.Button className="flex gap-3 items-center justify-between">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                        <div className="md:flex items-center gap-3 min-[300px]:hidden">
                            <h3 className="text-gray-700 font-semibold text-sm">Ahmad Ganteng</h3>
                            <AiFillCaretDown />
                        </div>
                    </Menu.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        className="relative z-50"
                    >
                        <Menu.Items className="absolute top-8 right-0 z-50 bg-white flex flex-col border-2 rounded-xl p-2 shadow-md w-48">
                            <Menu.Item className="flex items-center gap-3 p-3 rounded-xl">
                                {({ active }) => (
                                    <Link
                                        className={`text-gray-800 font-base ${active && 'bg-gray-100'}`}
                                        to="/profile"
                                    ><FaUserCircle className="text-xl" />
                                        My Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item className="flex items-center gap-3 p-3 rounded-xl">
                                {({ active }) => (
                                    <a
                                        className={`text-gray-800 font-base ${active && 'bg-gray-100'}`}
                                        href="/"
                                    ><FaUserFriends className="text-xl" />
                                        Group Chat
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item className="flex items-center gap-3 p-3 rounded-xl">
                                {({ active }) => (
                                    <a
                                        className={`text-gray-800 font-base ${active && 'bg-gray-100'}`}
                                        href="/"
                                    ><MdSettings className="text-xl" />
                                        Settings
                                    </a>
                                )}
                            </Menu.Item>
                            <div className="border-b-2 my-2"></div>
                            <Menu.Item className="flex items-center gap-3 p-3 rounded-xl">
                                {({ active }) => (
                                    <a
                                        className={`text-red-600 font-base ${active && 'bg-gray-100'}`}
                                        href="/"
                                    ><TbLogout className="text-xl" />
                                        Logout
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    )
}