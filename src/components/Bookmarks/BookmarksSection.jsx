import LeftMenu from "../Explore/LeftMenu";
import TweetSection from "../Home/TweetSection";

export default function BookmarksSection() {
    let menu = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

    return (
        <div className="xl:px-32 px-8 py-10 flex items-start gap-5">
            <div className="w-4/12">
                <LeftMenu menu={menu} />
            </div>
            <div className="w-8/12">
                <TweetSection />
            </div>
        </div>
    )
}
