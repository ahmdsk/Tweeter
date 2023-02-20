import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai"

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
                <div className="flex gap-3 items-center justify-between">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Profile" className="w-10 rounded-lg" />
                    <h3 className="text-gray-800 font-semibold text-base">Xanthe Neal</h3>
                    <AiFillCaretDown />
                </div>
            </div>
        </header>
    )
}