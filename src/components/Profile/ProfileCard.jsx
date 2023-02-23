import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { FaUserPlus } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import CheckList from "../CheckList"

export default function ProfileCard() {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="bg-white lg:mx-28 md:mx-6 py-6 md:py-3 px-8 md:px-4 min-[300px]:mx-3 rounded-lg mb-4">
                <div className="flex md:flex-row min-[300px]:flex-col min-[300px]:items-center">
                    <div className="md:w-2/12 min-[300px]:w-full relative min-[300px]:flex justify-center">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="md:w-36 min-[300px]:w-24 rounded-lg absolute md:bottom-2 md:left-0 border min-[300px]:bottom-0 border-4 z-0" />
                    </div>
                    <div className="w-10/12">
                        <div className="flex flex-col justify-between md:items-stretch gap-6 md:gap-3 min-[300px]:gap-3 md:px-4 min-[300px]:items-center">
                            <div className="flex md:flex-row min-[300px]:flex-col justify-between items-center">
                                <div className="flex md:flex-row min-[300px]:flex-col items-center md:gap-4 min-[300px]:gap-2 min-[300px]:pt-3">
                                    <h3 className="text-2xl md:text-xl font-semibold text-gray-700 flex gap-2 items-center">
                                        Ahmad Ganteng <CheckList />
                                    </h3>
                                    <div className="flex gap-3 md:pb-0 min-[300px]:pb-2 min-[300px]:justify-between">
                                        <div className="flex gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
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

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="bg-white md:mx-32 py-4 px-6 rounded-lg w-full">
                                    <Dialog.Title className="text-gray-700 border-b-2 border-gray-200 pb-4 mb-2 flex justify-between items-center">
                                        <h2 className="font-semibold">Ahmad Ganteng is following</h2>
                                        <button className="outline-none" onClick={() => setIsOpen(false)}>
                                            <FiX className="text-2xl" />
                                        </button>
                                    </Dialog.Title>

                                    <div className="py-3 border-b-2 last:border-b-0 border-gray-200">
                                        <div className="flex justify-between">
                                            <div className="flex gap-4 items-center">
                                                <div className="w1/12">
                                                    <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 rounded-lg" alt="Profile User" />
                                                </div>
                                                <div className="w-11/12">
                                                    <h1 className="text-gray-800 font-semibold text-md flex items-center gap-2">Cewenya Ahmad <CheckList /></h1>
                                                    <p className="text-gray-400 text-sm">120k followers</p>
                                                </div>
                                            </div>
                                            <button className="bg-blue-500 text-white font-medium py-1 px-4 rounded hover:bg-blue-800 flex items-center justify-center gap-2"><FaUserPlus className="font-semibold" /> Follow</button>
                                        </div>
                                        <div className="md:w-full min-[300px]:w-2/3 pt-4">
                                            <p className="text-gray-500 font-medium">follow me on ig @ahmdsk_</p>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
