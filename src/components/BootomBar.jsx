import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { BsBookmarkFill } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function BootomBar() {
    return (
        <div className="bg-white flex items-center justify-around p-6 fixed bottom-0 w-full md:hidden">
            <Link to="/">
                <AiFillHome className="text-gray-600 text-2xl" />
            </Link>
            <Link to="/explore">
                <MdExplore className="text-gray-600 text-2xl" />
            </Link>
            <Link to="/bookmarks">
                <BsBookmarkFill className="text-gray-600 text-xl" />
            </Link>
        </div>
    )
}
