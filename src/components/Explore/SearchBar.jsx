import { FiSearch } from "react-icons/fi"

export default function SearchBar() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-3 flex items-center">
        <div className="w-1/12 flex justify-center">
            <FiSearch className="text-gray-400 text-lg" />
        </div>
        <div className="w-11/12 relative">
            <input type="text" placeholder="Search" className="outline-none text-gray-700 w-full py-2 pl-2 pr-32" />
            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800 flex items-center gap-2 absolute top-0 right-0">Search</button>
        </div>
    </div>
  )
}
