import { RiEarthFill } from "react-icons/ri"
import { BsImage } from "react-icons/bs"
import { Menu, Transition } from "@headlessui/react"
import { HiUsers } from "react-icons/hi"
import { useState } from "react"

export default function NewTweet() {
    let [access, setAccess] = useState(true)
    
    return (
        <div className="bg-white shadow-sm rounded-lg py-4 px-6 mb-3">
            <h3 className="font-semibold text-gray-700 text-sm">Tweet something</h3>
            <div className="border border-gray-100 my-2"></div>
            <div className="flex items-start">
                <div className="md:w-1/12 min-[300px]:w-2/12">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                </div>
                <div className="md:w-11/12 min-[300px]:w-10/12">
                    <textarea type="text" className="py-2 mb-2 w-full h-20 resize-none font-medium text-gray-400 focus:outline-none min-[300px]:px-1" placeholder="What's happening?"></textarea>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="md:w-1/12 md:inline min-[300px]:hidden"></div>
                <div className="md:w-11/12 min-[300px]:w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <label htmlFor="upload_pict">
                                <input type="file" id="upload_pict" className="hidden" />
                                <BsImage className="text-blue-600 text-lg" />
                            </label>
                            <Menu as="div" className="relative">
                                <Menu.Button className="flex items-center gap-2 min-[300px]:gap-1 text-blue-600">
                                    {access ? <>
                                        <RiEarthFill className="text-xl min-[300px]:text-md" />
                                        <h3 className="min-[300px]:text-sm">Everyone can reply</h3>
                                    </> : <>
                                        <HiUsers className="text-xl min-[300px]:text-md" />
                                        <h3 className="min-[300px]:text-sm">People you follow</h3>
                                    </>}
                                </Menu.Button>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items className="absolute top-8 left-0 bg-white flex flex-col border-2 rounded-xl py-3 px-4 shadow-md w-72">
                                        <div className="pb-3">
                                            <h3 className="text-gray-700 font-semibold text-md">Who can reply?</h3>
                                            <p className="text-gray-400 text-sm">Choose who can reply to this tweet</p>
                                        </div>
                                        <Menu.Item className="flex items-center gap-2 p-2 rounded-xl">
                                            {({ active }) => (
                                                <h2 className={`text-gray-800 ${active && 'bg-gray-100'}`} onClick={() => setAccess(true)}>
                                                    <RiEarthFill className="text-xl" />
                                                    Everyone
                                                </h2>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className="flex items-center gap-2 p-2 rounded-xl">
                                            {({ active }) => (
                                                <h2 className={`text-gray-800 ${active && 'bg-gray-100'}`} onClick={() => setAccess(false)}>
                                                    <HiUsers className="text-xl" />
                                                    People you follow
                                                </h2>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-800">Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
