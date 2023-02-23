import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { BsBookmarkFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export default function BootomBar() {

    return (
        <div className="bg-white flex items-center justify-around fixed py-2 px-4 gap-5 bottom-0 w-full md:hidden">
            <NavLink to="/" className="rounded-lg w-4/12 py-2 px-3 flex justify-center hover:bg-gray-200 transition ease-in delay-150">
                <AiFillHome className="text-gray-600 text-2xl" />
            </NavLink>
            <NavLink to="/explore" className="rounded-lg w-4/12 py-2 px-3 flex justify-center hover:bg-gray-200 transition ease-in delay-150">
                <MdExplore className="text-gray-600 text-2xl" />
            </NavLink>
            <NavLink to="/bookmarks" className="rounded-lg w-4/12 py-2 px-3 flex justify-center hover:bg-gray-200 transition ease-in delay-150">
                <BsBookmarkFill className="text-gray-600 text-2xl" />
            </NavLink>
        </div>
    )
}
