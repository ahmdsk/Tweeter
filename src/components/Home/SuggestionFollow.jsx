import SuggestUser from "./SuggestUser"

export default function SuggestionFollow() {
    return (
        <div className="bg-white shadow-sm rounded-lg py-4 px-6 mb-4">
            <h3 className="font-semibold text-gray-700 text-sm">Who to follow</h3>

            <div className="border border-gray-100 my-2"></div>

            <SuggestUser name="Austin Mikael" />
            <SuggestUser name="Albert Stefany" />
        </div>
    )
}
