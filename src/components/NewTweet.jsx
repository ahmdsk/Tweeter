import { RiEarthFill } from "react-icons/ri"
import { ImFilePicture } from "react-icons/im"
import { Menu } from "@headlessui/react"
import { HiUsers } from "react-icons/hi"

export default function NewTweet() {
    return (
        <div className="bg-white shadow-sm rounded-lg py-4 px-6">
            <h3 className="font-semibold text-gray-700 text-sm">Tweet something</h3>
            <div className="border my-2"></div>
            <div className="flex items-start">
                <div className="w-1/12">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                </div>
                <div className="w-11/12">
                    <textarea type="text" className="py-2 w-full h-20 resize-none font-medium text-gray-400 focus:outline-none" placeholder="What's happening?"></textarea>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <label for="upload_pict">
                                <input type="file" id="upload_pict" className="hidden" />
                                <ImFilePicture className="text-blue-600 text-lg" />
                            </label>
                            <Menu as="div" className="relative">
                                <Menu.Button className="flex items-center gap-2 text-blue-600">
                                    <RiEarthFill className="text-xl" />
                                    <h3>Everyone can reply</h3>
                                </Menu.Button>

                                <Menu.Items className="absolute top-8 left-0 bg-white flex flex-col border-2 rounded-xl py-3 px-4 shadow-md w-72">
                                    <div className="pb-4">
                                        <h3 className="text-gray-700 font-semibold text-md">Who can reply?</h3>
                                        <p className="text-gray-400 text-sm">Choose who can reply to this tweet</p>
                                    </div>
                                    <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                                        {({ active }) => (
                                            <a
                                                className={`text-gray-700 font-medium ${active && 'bg-gray-100'}`}
                                                href="/account-settings"
                                            ><RiEarthFill className="text-xl" />
                                                Everyone
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item className="flex items-center gap-3 px-4 py-3 rounded-xl">
                                        {({ active }) => (
                                            <a
                                                className={`text-gray-700 font-medium ${active && 'bg-gray-100'}`}
                                                href="/account-settings"
                                            ><HiUsers className="text-xl" />
                                                People you follow
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-800">Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
