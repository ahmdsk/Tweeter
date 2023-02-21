import TweetSection from "../Home/TweetSection";
import SearchBar from "./SearchBar";

export default function ExploreSection() {
    return (
        <div className="px-32 py-10 flex items-start gap-5">
            <div className="w-4/12">
                <div className="bg-white shadow-sm rounded-lg p-6 flex flex-col gap-4">
                    <h4 className="text-gray-600 font-semibold">Top</h4>
                    <h4 className="text-gray-600 font-semibold">Lastest</h4>
                    <h4 className="text-gray-600 font-semibold">People</h4>
                    <h4 className="text-gray-600 font-semibold">Media</h4>
                </div>
            </div>
            <div className="w-8/12">
                <SearchBar />
                <TweetSection />
            </div>
        </div>
    )
}
