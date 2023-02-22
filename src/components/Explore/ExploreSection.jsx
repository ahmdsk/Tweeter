import TweetSection from "../Home/TweetSection";
import LeftMenu from "./LeftMenu";
import SearchBar from "./SearchBar";

export default function ExploreSection() {
    let menu = ['Top', 'Latest', 'People', 'Media'];

    return (
        <div className="xl:px-32 px-8 py-10 flex items-start gap-5">
            <div className="w-4/12">
                <LeftMenu menu={menu} />
            </div>
            <div className="w-8/12">
                <SearchBar />
                <TweetSection />
            </div>
        </div>
    )
}
