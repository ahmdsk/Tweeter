import TweetSection from "../Home/TweetSection";
import LeftMenu from "./LeftMenu";
import SearchBar from "./SearchBar";

export default function ExploreSection() {
    let menu = ['Top', 'Latest', 'People', 'Media'];

    return (
        <div className="xl:px-32 min-[300px]:py-4 min-[300px]:px-3 md:px-8 md:py-10 md:flex items-start gap-5">
            <div className="w-4/12 md:inline min-[300px]:hidden">
                <LeftMenu menu={menu} />
            </div>
            <div className="w-8/12 min-[300px]:w-full">
                <SearchBar />
                <TweetSection />
            </div>
        </div>
    )
}
