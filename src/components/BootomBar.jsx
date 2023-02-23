import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { BsBookmarkFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export default function BootomBar() {
    let disableLink = 'rounded-lg w-4/12 py-2 px-3 flex justify-center'
    let activeLink = `bg-gray-200 ${disableLink}`

    return (
        <div className="bg-white flex items-center justify-around fixed py-2 px-4 gap-5 bottom-0 w-full md:hidden">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : disableLink}>
                <AiFillHome className="text-gray-600 text-2xl" />
            </NavLink>
            <NavLink to="/explore" className={({isActive}) => isActive ? activeLink : disableLink}>
                <MdExplore className="text-gray-600 text-2xl" />
            </NavLink>
            <NavLink to="/bookmarks" className={({isActive}) => isActive ? activeLink : disableLink}>
                <BsBookmarkFill className="text-gray-600 text-xl" />
            </NavLink>
        </div>
    )
}
