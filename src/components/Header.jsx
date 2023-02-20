import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai"
import { FaUserCircle, FaUserFriends }  from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { TbLogout } from "react-icons/tb"
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Header() {
    return (
        <header className="bg-white flex justify-between items-center py-4 px-10">
            <div className="w3/12">
                <div className="flex gap-3 items-center">
                    <img src="/vite.svg" alt="Logo" className="w-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Tweeter</h3>
                </div>
            </div>
            <div className="w3/12">
                <ul className="flex gap-10">
                    <li>
                        <Link to="/" className="text-blue-700 font-medium">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-500 font-medium">Explore</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-500 font-medium">Bookmarks</Link>
                    </li>
                </ul>
            </div>
            <div className="w3/12">
                <Menu as="div" className="relative">
                    <Menu.Button className="flex gap-3 items-center justify-between">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                        <h3 className="text-gray-700 font-semibold text-base">Xanthe Neal</h3>
                        <AiFillCaretDown />
                    </Menu.Button>

                    <Menu.Items className="absolute top-16 right-0 bg-white flex flex-col border-2 rounded-xl py-3 px-4 shadow-md w-64">
                        <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                            {({ active }) => (
                                <a
                                    className={`text-gray-700 font-medium ${active && 'bg-gray-100'}`}
                                    href="/account-settings"
                                ><FaUserCircle className="text-xl" />
                                    My Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                            {({ active }) => (
                                <a
                                    className={`text-gray-700 font-medium ${active && 'bg-gray-100'}`}
                                    href="/account-settings"
                                ><FaUserFriends className="text-xl" />
                                    Group Chat
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                            {({ active }) => (
                                <a
                                    className={`text-gray-700 font-medium ${active && 'bg-gray-100'}`}
                                    href="/account-settings"
                                ><MdSettings className="text-xl" />
                                    Settings
                                </a>
                            )}
                        </Menu.Item>
                        <div className="border-b-2 my-2"></div>
                        <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                            {({ active }) => (
                                <a
                                    className={`text-red-500 font-medium ${active && 'bg-gray-100'}`}
                                    href="/account-settings"
                                ><TbLogout className="text-xl" />
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
        </header>
    )
}