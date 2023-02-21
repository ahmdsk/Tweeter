import { FiUserPlus } from "react-icons/fi"

export default function SuggestUser(props) {
    return (
        <div className="py-4">
            <div className="flex justify-between">
                <div className="w-8/12 flex gap-4">
                    <div className="w2/12">
                        <img src="https://randomuser.me/api/portraits/men/6.jpg" className="w-10 rounded-lg" alt="Profile User" />
                    </div>
                    <div className="w-10/12">
                        <h1 className="text-gray-800 font-semibold text-md">{props.name}</h1>
                        <p className="text-gray-400 text-sm">120k followers</p>
                    </div>
                </div>
                <div className="w-4/12 flex justify-end">
                    <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-800 flex items-center gap-2"><FiUserPlus className="font-semibold" /> Follow</button>
                </div>
            </div>

            <div className="py-4">
                <p className="text-gray-400 font-medium">Blockchain Developer based in Indonesia</p>
            </div>

            <div className="">
                <img src="https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Latest Post" className="rounded-lg h-24 w-full object-cover object-top" />
            </div>
        </div>
    )
}
